import React from 'react'

class ProjectTitleForm extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            project: this.props.project,
            disabled: true,
            editButtonClass: 'project-edit-button'
        }

        this.updateProjectTitle = this.updateProjectTitle.bind(this)
    }

    componentDidMount () {
        this.setState({project: this.props.project})
    }

    switchInput () {
        this.setState({ disabled: !this.state.disabled})
        this.setState({ editButtonClass: 'project-edit-button-hidden'})
    }

    updateTitle (e) {
        return e => (this.setState({project: {['title']: e.target.value}}))
    }

    updateProjectTitle () {
        this.props.updateProject(this.state.project, this.props.project.id)
        this.setState({editButtonClass: 'project-edit-button'})
        this.setState({disabled: !this.state.disabled})
    }

    render () {
        return ( 
            <div className='project-banner-title'>
                {/* <p 
                style={{color: `${this.props.color}`}}
                >{this.props.project.title}</p> */}
                <form onSubmit={this.updateProjectTitle}>
                            <input
                                disabled={this.state.disabled}
                                value={this.state.project.title}
                                onChange={this.updateTitle()}
                                style={{color: `${this.props.color}`}}
                            >
                            </input>
                </form>
                <button 
                    className={this.state.editButtonClass}
                    onClick={() => this.switchInput()}>Edit
                </button>
            </div>               
        )
    }
}

export default ProjectTitleForm;
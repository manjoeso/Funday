import React from 'react'

class ProjectTitleForm extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            project: this.props.project,
            projectInputClass: 'project-input-not-selected'
        }

        this.updateProjectTitle = this.updateProjectTitle.bind(this)
        this.selectInput = this.selectInput.bind(this)
    }

    componentDidMount () {
        this.setState({project: this.props.project})
    }

    
    updateTitle (e) {
        return e => (this.setState({project: {['title']: e.target.value}}))
    }
    
    updateProjectTitle () {
        this.props.updateProject(this.state.project, this.props.project.id)
        this.setState({projectInputClass: 'project-input-not-selected'})
        // this.setState({disabled: !this.state.disabled})
    }
    
    selectInput () {
        this.setState({ projectInputClass: 'project-input-selected'})
    }

    render () {
        return ( 
            <div className='project-banner-title'>
                {/* <p 
                style={{color: `${this.props.color}`}}
                >{this.props.project.title}</p> */}
                <form onSubmit={this.updateProjectTitle}>
                            <input
                                // disabled={this.state.disabled}
                                id={this.state.projectInputClass}
                                onBlur={this.updateProjectTitle}
                                onFocus={this.selectInput}
                                value={this.state.project.title}
                                onChange={this.updateTitle()}
                                style={{color: `${this.props.color}`}}
                            >
                            </input>
                </form>
            </div>               
        )
    }
}

export default ProjectTitleForm;
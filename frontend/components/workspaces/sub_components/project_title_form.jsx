import React from 'react'

class ProjectTitleForm extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            project: this.props.project,
            disabled: false,
        }

        // this.submitProjectTitle = this.submitProjectTitle.bind(this)
    }

    switchInput () {
        this.setState({ disabled: !this.state.disabled})
    }

    updateTitle (e) {
        return e => (this.setState({['project']: {['title']: e.target.value}}))
    }


    render () {
        return (
            <div>
                <form> 
                    <input
                        disabled={this.state.disabled}
                        value={this.state.project.title}
                        // onChange={this.updateTitle()}
                        onClick={() => this.switchInput()}
                    >
                    </input>
                </form>
            </div>               
        )
    }
}

export default ProjectTitleForm;
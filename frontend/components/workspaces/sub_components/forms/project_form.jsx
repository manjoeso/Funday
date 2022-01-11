import React from 'react'

class ProjectForm extends React.Component {
    constructor (props){
        super(props)
        this.state = this.props.project;

        this.processCreate = this.processCreate.bind(this)
    }

    updateTitle (e) {
        return e => (this.setState({['title']: e.target.value}))
    }

    processCreate () {
        this.props.createProject(this.state, parseInt(this.props.currentBoard.id))
    }
 
    render(){
        return (
            <div className='create-project-form-container'>
                <form onSubmit={this.processCreate}>
                    <label>Project Title
                        <input type='text' 
                            value={this.state.title}
                            onChange={this.updateTitle()}
                        />
                    </label>
                <button className='add-project-button' type='submit'>New Item</button>
                </form>
            </div>
        )
    }
}

export default ProjectForm;
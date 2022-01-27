import React from 'react'

class WorkspaceForm extends React.Component {
    constructor (props){
        super(props)
        this.state = this.props.workspace;

        this.processCreate = this.processCreate.bind(this)
    }

    updateTitle (e) {
        return e => (this.setState({['title']: e.target.value}))
    }

    handleFocus(event) {
        event.target.select();
    }

    processCreate () {
        let {currentUser, createWorkspace} = this.props;

        let newWorkspace = {user_id: currentUser.id, title: this.state.title };

        createWorkspace(newWorkspace)
        // .then(obj => this.createTasks(obj))
        // .then(this.setState({['title']: ''})) // resets form input field

        this.props.closeModal();
    }
    
    // createTasks (obj) {
    //     let task = {}
    //     task['project_id'] = obj.project.id
    //     task['title'] = 'Item 1'
    //     this.props.createTask(task)
    //     task['title'] = 'Item 2'
    //     this.props.createTask(task)
    // }

    render(){
        return(
            <div className='create-workspace-board-form-container'>
                <div className='create-workspace-board-header'>
                    <h1>Create Workspace</h1>
                </div>
                <form onSubmit={this.processCreate}>
                    <div className='create-workspace-board-input-container'>
                        <h3>Workspace name</h3>
                        <input type='text' 
                            value={this.state.title}
                            onChange={this.updateTitle()}
                            onFocus={this.handleFocus}
                        />
                    </div>
                    <div className='create-workspace-board-form-button-container'>
                        <button 
                            className='add-board-button' 
                            type='submit'
                            // onClick={() => this.props.closeModal()}
                        >
                        Create Workspace
                        </button>
                        <button onClick={() => this.props.closeModal()} className='cancel-button'>Cancel</button>
                    </div>
                </form>
            </div>

        )
    }
}

export default WorkspaceForm;
import React from 'react'

class BoardForm extends React.Component {
    constructor (props){
        super(props)
        this.state = this.props.board;

        this.processCreate = this.processCreate.bind(this)
    }

    updateTitle (e) {
        return e => (this.setState({['title']: e.target.value}))
    }

    processCreate () {
        debugger

        this.props.createBoard(this.state, parseInt(this.props.currentWorkspaceId))
        .then(obj => this.createProjects(obj))
        .then(this.setState({['title']: ''}))
        .then(this.props.closeModal())
    } 

    createProjects (obj) {
        let project = {title: 'New Project'}
        this.props.createProject(project, obj.board.id)
    }
 
    render(){
        
        return (
            <div className='create-workspace-board-form-container'>
                <div className='create-workspace-board-header'>
                    <h1>Create Board</h1>
                </div>
                <form onSubmit={this.processCreate}>
                    <div className='create-workspace-board-input-container'>
                        <h3>Board name</h3>
                        <input type='text' 
                            value={this.state.title}
                            onChange={this.updateTitle()}
                        />
                    </div>
                    <div className='create-workspace-board-form-button-container'>
                        <button 
                            className='add-board-button' 
                            type='submit'
                            // onClick={() => this.props.closeModal()}
                        >
                        Create Board
                        </button>
                        <button onClick={() => this.props.closeModal()} className='cancel-button'>Cancel</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default BoardForm;
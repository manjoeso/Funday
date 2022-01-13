import React from 'react'

class EditBoardForm extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            board: this.props.board,
            disabled: true,
        }

        // this.changeBoardtitle = this.changeBoardtitle.bind(this)
    }

    // componentDidMount () {
    //     this.setState({board: this.props.board})
    // }

    // componentDidUpdate () {
    //     this.setState({board: this.props.board})
    // }

    switchInput () {
        this.setState({ disabled: !this.state.disabled})
        this.setState({ editButtonClass: 'task-edit-button-hidden'})
    }
    
    updateTitle (e) {
        return e => (this.setState({['task']: {['title']: e.target.value}}))
    }

    changeBoardTitle () {
        //  this.props.updateTask(this.state)
        this.props.updateBoard(this.state.task, this.props.task.id)
        this.setState({editButtonClass: 'task-edit-button'})
        this.setState({disabled: !this.state.disabled})
    } 

    render(){
        // probably want to change classname on click as well, to make it more noticeable
        return (
            <div className='board-banner-left'>
            
                <p>{this.props.board.title}</p> 
{/*                 
                <form onSubmit={this.changeBoardtitle}>
                    <input
                        disabled={this.state.disabled}
                        value={this.state.board.title}
                        onChange={this.updateTitle()}
                        >
                    </input>
                </form> */}
            </div>

        )
    }
}

export default EditBoardForm;
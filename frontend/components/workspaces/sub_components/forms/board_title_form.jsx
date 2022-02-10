import React from 'react'

class BoardTitleForm extends React.Component {
    constructor(props){
        super(props)
        this.state = { 
            board: this.props.board,
            boardTitleInputClass: 'board-title-not-selected',
            boardDescriptionInputClass: 'board-description-not-selected'
        }
        this.updateBoard = this.updateBoard.bind(this)
        this.selectTitle = this.selectTitle.bind(this)
        this.selectDescription = this.selectDescription.bind(this)
    }
    
    componentDidMount () {
        this.setState({board: this.props.board})
    }

    componentDidUpdate (prevProps) {
        if(this.props.board !== prevProps.board){
            this.setState({board: this.props.board})
        }
    }

    updateTitle (e) {
        return e => (this.setState({board: {['title']: e.target.value}}))
    }

    updateDescription (e) {
        return e => (this.setState({board: {['description']: e.target.value}}))
    }

    updateBoard (e) {
        let newBoard = Object.assign({}, this.state.board, {['id']: this.props.board.id})
        this.props.updateBoard(newBoard)
        this.setState({boardTitleInputClass: 'board-title-not-selected'})
        this.setState({boardDescriptionInputClass: 'board-description-not-selected'})
    }

    selectTitle () {
        this.setState({ boardTitleInputClass: 'board-title-selected'})
    }

    selectDescription () {
        this.setState({ boardDescriptionInputClass: 'board-description-selected'})
    }

    render(){
        return ( 
            <div className='board-dashboard-banner'>
                <div className='board-dashboard-banner-left'>
                    <form onSubmit={this.updateBoard}>
                        <input
                            id={this.state.boardTitleInputClass}
                            onBlur={this.updateBoard}
                            onFocus={this.selectTitle}
                            value={this.state.board.title}
                            onChange={this.updateTitle()}
                        >
                        </input>
                    </form>
                    <form onSubmit={this.updateBoard}>
                        <input
                            id={this.state.boardDescriptionInputClass}
                            onBlur={this.updateBoard}
                            onFocus={this.selectDescription}
                            value={this.state.board.description}
                            onChange={this.updateDescription()}
                            placeholder='Add board description'
                            type={this.state.boardDescriptionInputClass === 'board-description-selected' ? 'textarea' : 'text'}
                        >
                        </input>
                    </form>
                </div>
                <div className='board-dashboard-banner-right'>
                    <div id='add-to-board'>
                        + Add to board
                    </div>
                    <div id='activity'>
                        Activity
                    </div>
                    <div onClick={() => this.props.openModal('inviteUsers')} id='invite'>
                        Invite
                    </div>
                    <div id='invite'>
                        Last seen
                    </div>
                </div>
            </div>
        )
    }
}

export default BoardTitleForm;
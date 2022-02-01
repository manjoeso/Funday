import React from 'react'

class BoardTitleForm extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            board: this.props.board,
            boardInputClass: 'board-input-not-selected'
        }
        this.updateBoardTitle = this.updateBoardTitle.bind(this)
        this.selectInput = this.selectInput.bind(this)
    }
    
    componentDidMount () {
        this.setState({board: this.props.board})
    }

    updateTitle (e) {
        return e => (this.setState({board: {['title']: e.target.value}}))
    }

    updateBoardTitle (e) {
        debugger
        let newBoard = Object.assign({}, this.state.board, {['id']: this.props.board.id})
        debugger
        this.props.updateBoard(newBoard)
        this.setState({boardInputClass: 'board-input-not-selected'})
    }

    selectInput () {
        console.log('hello')
        this.setState({ boardInputClass: 'board-input-selected'})
    }

    render(){
        return ( 
            <div className='project-banner-title'>
                <form onSubmit={this.updateBoardTitle}>
                    <input
                        id={this.state.boardInputClass}
                        onBlur={this.updateBoardTitle}
                        onFocus={this.selectInput}
                        value={this.state.board.title}
                        onChange={this.updateTitle()}
                    >
                    </input>
                </form>
            </div>               
        )
    }
}

export default BoardTitleForm;
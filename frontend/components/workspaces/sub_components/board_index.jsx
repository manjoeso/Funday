import React from 'react';
import {Link} from 'react-router-dom'
import EditBoardFormContainer from './forms/board_title_form_container'
import BoardDropdownContainer from './dropdowns/board_dropdown_container'

class BoardIndex extends React.Component {
    constructor(props) { 
        super(props)
    }


    setCurrentBoardClass (board) {
        if (board.id === this.props.currentBoard.id){
            return ('selected-board-item-container');
        } else {
            return ('board-item-container');
        }       
    }
    render () {

        // the if else statement here was a quick workaround to get the class name of the selected board to change
        // the reason it has to be if else is because shared by workspace show, which renders board index. current board at 
        // workspace show will be nil, so the "else" is to render normally
        if(this.props.currentBoard){
            return (
                <div className='board-parent-container'>
                    <button className='add-board-display-button' onClick={() => this.props.openModal('addBoard')}>
                        + Add Board
                    </button>
                    {
                        this.props.boards.map((board, idx) =>                   
                            <div key={board.id} className={`${this.setCurrentBoardClass(board)}`}>
                                <i className="gg-board"></i>
                                <div className='board-title'>
                                    <Link 
                                        to={`/${this.props.currentWorkspaceId}/boards/${board.id}`}
                                    >
                                    {board.title.length > 7 ? (`${board.title.slice(0, 7)}` + '...') : board.title}
                                    </Link>
                                </div>
                                <BoardDropdownContainer key={idx} board={board}></BoardDropdownContainer>
                            </div>
                        )
                    }
                </div>
            )
        } else {
            return (<div className='board-parent-container'>
            <button className='add-board-display-button' onClick={() => this.props.openModal('addBoard')}>+ Add Board</button>
                {
                    this.props.boards.map((board, idx) =>              
                    <div key={board.id} className={`board-item-container`}>
                        <i className="gg-board"></i>
                        <div className='board-title'>
                            <Link 
                                to={`/${this.props.currentWorkspaceId}/boards/${board.id}`}
                            >
                            {/* <EditBoardFormContainer board={board}/> */}
                            {board.title.length > 15 ? (`${board.title.slice(0, 15)}` + '...') : board.title}
                            </Link>
                        </div>
                        <div className='board-dropdown-container'>
                            <BoardDropdownContainer key={idx} board={board}></BoardDropdownContainer>
                        </div>
                    </div>
                    )
                }
        </div>)
        }
    }
}

export default BoardIndex; 
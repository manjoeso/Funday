import React from 'react';
import {Link} from 'react-router-dom'
import EditBoardFormContainer from './forms/edit_board_form_container'
import BoardDropdownContainer from './dropdowns/board_dropdown_container'

class BoardIndex extends React.Component {
    constructor(props) { 
        super(props)
    }

    render () {
        
        return (
            <div className='board-parent-container'>
                {/* <BoardFormContainer currentWorkspaceId={this.props.currentWorkspaceId}/> */}
                <button className='add-board-display-button' onClick={() => this.props.openModal('addBoard')}>Add Board</button>
                    {
                        this.props.boards.map((board, idx) =>  
                        <div key={board.id} className='board-item-container'>
                            <div className='board-title'>
                                <Link 
                                    to={`/${this.props.currentWorkspaceId}/boards/${board.id}`}
                                >
                                {/* <EditBoardFormContainer board={board}/> */}
                                {board.title}
                                </Link>
                            </div>
                            <div className='board-dropdown-button-container'>
                                <BoardDropdownContainer key={idx} board={board}></BoardDropdownContainer>
                            </div>
                        </div>
                        )
                    }
            </div>
        )
    }
}

export default BoardIndex; 
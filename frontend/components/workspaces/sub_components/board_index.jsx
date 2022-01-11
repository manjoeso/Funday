import React from 'react';
import {Link} from 'react-router-dom'
import BoardFormContainer from './forms/create_board_form_container'
import BoardDropdownContainer from './dropdowns/board_dropdown_container'

class BoardIndex extends React.Component {
    constructor(props) { 
        super(props)
    }

    render () {
        return (
            <div className='board-parent-container'>
                <BoardFormContainer/>
                <div className='board-list-container'>
                    {
                        this.props.boards.map((board, idx) =>  
                        <div key={board.id} className='board-item-container'>
                            <div className='board-title'>
                                <Link 
                                    to={`/${this.props.currentWorkspaceId}/boards/${board.id}`}
                                >
                                        {board.title}
                                </Link>
                            </div>
                            <div className='board-dropdown-button'>
                                <BoardDropdownContainer key={idx} board={board}></BoardDropdownContainer>
                            </div>
                        </div>
                        )
                    }
                </div>
            </div>
        )
    }
}

export default BoardIndex; 
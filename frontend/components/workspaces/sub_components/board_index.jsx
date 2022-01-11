import React from 'react';
import {Link} from 'react-router-dom'
import BoardFormContainer from './forms/create_board_form_container'


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
                        this.props.boards.map((board) =>  
                        <Link 
                            key={board.id} 
                            to={`/${this.props.currentWorkspaceId}/boards/${board.id}`}
                        >
                                {board.title}
                        </Link>)
                    }
                </div>
                // add react drop down component
            </div>
        )
    }
}

export default BoardIndex; 
import React from 'react';
import {Link} from 'react-router-dom'


class BoardIndex extends React.Component {
    constructor(props) {
        super(props)
       
    }

    render () {
        return (
            <div className='board-parent-container'>
                <div className='board-list-container'>
                    {
                        // this.props.boards.map(board => <li key={board.id}>{board.title}</li>)
                        this.props.boards.map((board) =>  <Link key={board.id} to={`/${this.props.currentWorkspaceId}/boards/${board.id}`}>{board.title}</Link>)
                    }
                </div>
            </div>
        )
    }
}

export default BoardIndex; 
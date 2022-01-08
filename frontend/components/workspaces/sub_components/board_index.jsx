import React from 'react';
import {Link} from 'react-router-dom'


class BoardIndex extends React.Component {
    constructor(props) {
        super(props)
       
    }

    render () {
        debugger
        return (
            <div className='board-parent-container'>
                <h1>Boards</h1>
                {
                    // this.props.boards.map(board => <li key={board.id}>{board.title}</li>)
                    this.props.boards.map((board) =>  <Link key={board.id} to={`/${this.props.currentWorkspaceId}/boards/${board.id}`}>{board.title}</Link>)
                }
            </div>
        )
    }
}

export default BoardIndex; 
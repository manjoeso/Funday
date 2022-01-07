import React from 'react';

class BoardIndex extends React.Component {
    constructor(props) {
        super(props)
       
    }

 
    render () {
        return (
            <div className='board-parent-container'>
                <h1>Boards</h1>
                {
                    this.props.boards.map(board => <li key={board.id}>{board.title}</li>)
                }
            </div>
        )
    }
}

export default BoardIndex;
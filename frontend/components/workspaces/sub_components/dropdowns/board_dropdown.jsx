import React from 'react';


class BoardDropdown extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            open: false 
        }
        this.focusOrBlur = this.focusOrBlur.bind(this); 
    }

    focusOrBlur(e) {
        let newState = !this.state.open
        this.setState({
            open: newState
        })
    }

    render() {
        return (
                <button onFocus={this.focusOrBlur} onBlur={this.focusOrBlur} className="board-dropdown-button">
                    {/* <DropdownIcon className="dropdown-icon"/> */}
                    <ul onClick={e => e.stopPropagation()} className={this.state.open ? "board-display-dropdown" : "no-dropdown"}>
                        <div className="board-inner-dropdown-button">Rename Board</div>
                        <div onClick={() => this.props.deleteBoard(this.props.board)} className="board-inner-dropdown-button">Delete</div>
                    </ul>
                </button>
            
        )
    }
}

export default BoardDropdown;
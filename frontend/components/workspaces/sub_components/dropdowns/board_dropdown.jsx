import React from 'react';


class BoardDropdown extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            open: false 
        }
        this.handleClick = this.handleClick.bind(this); 

    }

    handleClick (e) {
        e.preventDefault()
        this.setState( state => {
            return {
                open: !state.open
            }
        })
    }
    
    render() {
        return (
            <div>
                <div onClick={this.handleClick} className="board-dropdown-button">
                    {/* <DropdownIcon className="dropdown-icon"/> */}
                </div>
                <ul onClick={e => e.stopPropagation()} className={this.state.open ? "board-display-dropdown" : "no-dropdown"}>
                    <div onClick={() => this.props.deleteBoard(this.props.board)} className="board-inner-dropdown-button">Delete</div>
                    <div onClick={this.handleClick} className="board-inner-dropdown-button">Cancel</div>
                </ul>
            </div>
            
        )
    }
}

export default BoardDropdown;
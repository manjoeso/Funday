import React from 'react';


class BoardDropdown extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            open: false 
        }
        this.handleFocus = this.handleFocus.bind(this); 
        this.handleBlur = this.handleBlur.bind(this); 
        this.handleClick = this.handleClick.bind(this); 

    }

    handleClick (e) {
        e.preventDefault()
        if(this.props.location.pathname === `/${this.props.currentWorkspaceId}/boards/${this.props.board.id}`){
            this.props.history.push(`/workspaces/${this.props.currentWorkspaceId}`)
        }
        this.props.deleteBoard(this.props.board)
    }

    handleFocus (e) {
        const newState = !this.state.open  
        this.setState({open: newState})
    }

    handleBlur (e) {
        this.setState({open: false})
    }

    
    render() {
        return (
            // <div>
                <div onClick={this.handleFocus} onBlur={this.handleBlur} className="board-dropdown-button">
                    <ul className={this.state.open ? "board-display-dropdown" : "no-dropdown"}>
                        <div onClick={this.handleClick} className="board-inner-dropdown-button">Delete</div>
                        <div className="board-inner-dropdown-button">Cancel</div>
                    </ul>
                </div>
            // </div>
            
        )
    }
}

export default BoardDropdown;
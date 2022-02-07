import React from 'react';


class BoardDropdown extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            open: false 
        }
        this.handleFocus = this.handleFocus.bind(this); 
        this.handleBlur = this.handleBlur.bind(this); 

    }

    // handleClick (e) {
    //     e.preventDefault()
    //     this.setState( state => {
    //         return {
    //             open: !state.open
    //         }
    //     })
    // }

    handleFocus (e) {
        const newState = !this.state.open  
        this.setState({open: newState})
    }

    handleBlur (e) {
        this.setState({open: false})
    }

    // onClick={e => e.stopPropagation()}
    
    render() {
        return (
            // <div>
                <div onClick={this.handleFocus} onBlur={this.handleBlur} className="board-dropdown-button">
                    <ul className={this.state.open ? "board-display-dropdown" : "no-dropdown"}>
                        <div onClick={() => this.props.deleteBoard(this.props.board)} className="board-inner-dropdown-button">Delete</div>
                        <div onClick={this.handleClick} className="board-inner-dropdown-button">Cancel</div>
                    </ul>
                </div>
            // </div>
            
        )
    }
}

export default BoardDropdown;
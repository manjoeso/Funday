import React from 'react';


class ProjectDropdown extends React.Component {
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
                <div onClick={this.handleClick} 
                    className="project-dropdown-button"
                    onMouseOver={this.props.color}>
                    {/* <DropdownIcon className="dropdown-icon"/> */}
                    <ul onClick={e => e.stopPropagation()} className={this.state.open ? "project-display-dropdown" : "no-dropdown"}>
                        <div onClick={() => this.props.deleteProject(this.props.project)} className="board-inner-dropdown-button">Delete</div>
                        <div onClick={this.handleClick} className="board-inner-dropdown-button">Cancel</div>
                    </ul>
                </div>
            
        )
    }
}

export default ProjectDropdown;

// import React from 'react'; 

// class ClickDropdown extends React.Component {
//     constructor(props) {
//         super(props); 
//         this.state = {
//             show: false 
//         }

//         this.whenFocusOrBlur = this.whenFocusOrBlur.bind(this); 
//     }

//     whenFocusOrBlur(e) {
//         const newState = !this.state.show 
//         this.setState({show: newState})
//     }

//     render() {
//         return (
//             <div>
//                 <button onFocus={this.whenFocusOrBlur} onBlur={this.whenFocusOrBlur}>ICON THAT TRIGGERS DROPDOWN
//                     <ul onClick={e => e.stopPropagation()} classname={this.state.show ? "show-dropdown" : "clear"}>
//                         <li>Click this</li>
//                         <li>Click this too</li>
//                         <li>Or click this</li>
//                     </ul>
//                 </button>
//             </div>
//         )
//     }
// }
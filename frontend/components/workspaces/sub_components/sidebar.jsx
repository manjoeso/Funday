import React from 'react'

class Sidebar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='sidebar-container'>
                <div className='logout-button'>
                    <br></br>
                    <br></br>
                    <button onClick={()=> this.props.logout()}>Logout</button>
                </div>
            </div>
        )
    }
}

export default Sidebar;
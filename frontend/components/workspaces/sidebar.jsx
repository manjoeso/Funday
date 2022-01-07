import React from 'react'

class Sidebar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            // <h1>Hello</h1>
            <div className='logout-button'>
                <br></br>
                <br></br>
                <button onClick={()=> this.props.logout()}>Logout</button>
            </div>
        )
    }
}

export default Sidebar;
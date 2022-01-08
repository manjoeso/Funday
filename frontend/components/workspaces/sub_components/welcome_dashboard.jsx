import React from 'react';
import {Link} from 'react-router-dom'

class WelcomeDashboard extends React.Component {
    constructor(props) {
        super(props)

    }
    // needs to be adjusted, can add current user onto state and pass through
    // in map state to props
 
    render () {
            return (
                <div className='welcome-dashboard-parent-container'>
                    <h1>Greetings, {this.props.currentUser.name}!</h1>
                </div>
            )
    }
}

export default WelcomeDashboard;
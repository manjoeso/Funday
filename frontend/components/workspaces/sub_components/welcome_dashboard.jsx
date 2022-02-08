import React from 'react';
import {Link} from 'react-router-dom'

class WelcomeDashboard extends React.Component {
    constructor(props) {
        super(props)

    }
    // needs to be adjusted, can add current user onto state and pass through
    // in map state to props
 
    render () {
        debugger
        if(this.props.currentWorkspace){
            return (
                <section className='ws-dash-parent-container'>
                    <div className='ws-dash-top'>
    
                    </div>
                    <div className='ws-dash-bot-cont'>
                        <div className='ws-dash-banner'>
                            <div className='ws-dash-banner-left'>
                                <div className='wsdbls'>
                                    <div className='ws-big-icon'>
                                        {this.props.currentWorkspace.title[0]}
                                    </div>
                                </div>
                                <div className='wsdbrs'>
    
                                </div>
                            </div>
                            <div className='ws-dash-banner-right'>
    
                            </div>
                        </div>
                        <div className='ws-dash-content'>
    
                        </div>
                    </div>
                </section>
            )
        } else {
            return (null)
        }
    }
}

export default WelcomeDashboard;
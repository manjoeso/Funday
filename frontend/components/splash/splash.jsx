import React from 'react'
import {Link, Switch, Route} from 'react-router-dom'
import WorkspaceContainer from '../workspaces/workspace_container'
// import gif from '../../../app/assets/images/splash.gif'

class Splash extends React.Component{
    constructor(props){
        super(props)
    }

    render (){
        if (!this.props.currentUser){
            return (
                <div>
                    <div className="splash-navbar-container">
                        <nav className="nav-buttons-parent-container">
                            <Link to='/'>
                                <img src="https://cdn.monday.com/images/logos/monday_logo_short.png"/>
                            </Link>              
                            <div className="left-nav-buttons">
                                {/* <div className="homepage-logo">
                                    <Link to='/'>Monday.com</Link>
                                </div> */}
                                <ul className='nav-promo-link-buttons'>
                                    <a className='splash-nav-button' href=''>Linked In</a>
                                    <a className='splash-nav-button' href=''>Github Repo</a>
                                </ul>
                            </div>
                            <div className="right-nav-buttons">
                                <Link className='splash-nav-button' to='/login'>Login</Link>
                                <Link className='signup-button-small' to='/signup'><p>Get Started </p></Link>
                            </div>
                        </nav>
                    </div>
                    <div className='splash-headers'>
                        <h1>A platform built for <br></br><b> a new way of working</b></h1>
                        <h2>What would you like to manage with funday.com Work OS?</h2>
                    </div>
                    <div className="selectable-tags-container">
                        <Link className='signup-button-big' to='/signup'>Get Started </Link>
                         {// change to button eventually to fix styling
                         }
                        <img></img>
                    </div>
                </div>
            )
        } else { // this will be my "logged-in" homepage, with all react components inside
            // conditional logic here to set workspace_id to first in array?
            return (
                <div className='homepage-parent-container'>
                    <br></br>
                    <br></br>
                    {//<h1>Greetings {this.props.currentUser.email}</h1>
                }
                    <div className='sidebar'>
                        <div className='logout-button'>
                            <button onClick={()=> this.props.logout()}>Logout</button>
                        </div>
                    </div>
                    <div className='main-work-area'>
                        <div className='workspace-board-container'>
                            <div className='workspace-parent-container'>
                            <h1>Workspaces</h1>
                                <div className='workspace-container'>
                                    <WorkspaceContainer currentUser={this.props.currentUser}/> 
                                </div>
                            </div>
                            <div className='board-parent-container'>
                                <h1>Boards go here</h1>                        
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default Splash;
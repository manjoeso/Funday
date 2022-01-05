import React from 'react'
import {Link, Switch, Route} from 'react-router-dom'
import Homepage from '../workspaces/homepage_container'
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
        } else { 
            return (
                <Homepage currentUser={this.props.currentUser}/> 
            )
        }
    }
}

export default Splash;
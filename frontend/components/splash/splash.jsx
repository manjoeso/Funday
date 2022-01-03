import React from 'react'
import {Link} from 'react-router-dom'

class Splash extends React.Component{
    constructor(props){
        super(props)
    }

    render (){
        if (!this.props.currentUser){
            return (
                <div>
                    <div class="splash-navbar-container">
                        <nav class="buttons-parent-container">
                            <div class="left-nav-buttons">
                                <div class="homepage-logo">
                                    <Link to='/'>Monday.com</Link>
                                </div>
                                <ul class='promo-link-buttons'>
                                    <li><a href=''>Linked In</a></li>
                                    <li><a href=''>Github Repo</a></li>
                                </ul>
                            </div>
                            <div class="right-nav-buttons">
                                <Link className='login-button' to='/login'>Login</Link>
                                <Link className='signup-button' to='/signup'>Get Started</Link>
                            </div>
                        </nav>
                        {/* <video width="320" height="240" controls>
                            <source src="splash_anim.mp4" type="video/mp4"></source>
                        </video> */}
                    </div>
                    <div class='splash-header'>
                        <h1>A platform built for <br></br><b> a new way of working</b></h1>
                        <h2>What would you like to manage with monday.com Work OS?</h2>
                    </div>
                    <div class="selectable-tags-container">

                    <Link className='signup-button big' to='/signup'>Get Started</Link>
                    </div>
                </div>
            )
        } else { 
            return (
                <div>
                    <h1>Greetings {this.props.currentUser.email}</h1>
                    <button onClick={()=> this.props.logout()}>Logout</button>           
                </div>
            )
        }
    }
}

export default Splash;
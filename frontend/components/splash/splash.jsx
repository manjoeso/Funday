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
                    <Link to='/signup'>Sign Up</Link>
                    <br></br>
                    <Link to='/login'>Login</Link>
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
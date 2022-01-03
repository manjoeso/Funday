import React from 'react'
import {Link, Redirect} from 'react-router-dom'

class LoginForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        email: "",
        password: ""
      }
      this.handleSubmit = this.handleSubmit.bind(this)
    }

    update(field) {
        return e => this.setState({[field]: e.currentTarget.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.login(this.state);
    }

    renderErrors() {
        return(
          <ul>
            {this.props.errors.map((error, i) => (
              <li key={`error-${i}`}>
                {error}
              </li>
            ))}
          </ul>
        );
    }
    
    render () {
        const demoUser = {email: 'john_smith@gmail.com', password: 'password', name: 'John Smith'}
        return (
            <div className='login-funday-container'>
                <div className='login-monday-top-header-wrapper'>
                    <img src="https://cdn.monday.com/images/logos/monday_logo_short.png"/>
                </div>
                <div className='router-wrapper'>
                    <div className='email-password-component'>
                        <h1 className='login-header'>Log in to your account</h1>
                        <form onSubmit={this.handleSubmit}>
                            {this.renderErrors()}
                            <div className='form-input-wrapper'>
                                <span>Email</span>
                                <input
                                    type='text'
                                    value={this.state.email}
                                    onChange={this.update('email')}
                                />
                            </div>
                            <div className='form-input-wrapper'>
                                <span>Password</span> 
                                <input
                                    type='password'
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                />
                            </div>
                            <button type='submit'>{this.props.formType}</button>
                            <h2>Or Sign in with</h2>
                            <button type='submit' onClick={() => this.props.login(demoUser)}>Demo User</button>
                            <br></br>
                            <span>Don't have an account yet?</span>
                            <Link to='/signup'>Sign up</Link>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginForm;
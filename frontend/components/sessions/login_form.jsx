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
        this.props.processForm(this.state);
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
        )
    }

    componentWillUnmount () {
        this.props.removeErrors();
    }
    
    render () {
        const demoUser = {email: 'demo_user@gmail.com', password: 'password'}
        let errors_class = '';
        
        if (this.props.errors.length > 0) { // check length
            errors_class = 'login-signup-error-display'
        }
        return (
            <div className='login-funday-container'>
                <div className='login-monday-top-header-wrapper'>
                    <Link to='/'>
                        <img src="https://cdn.monday.com/images/logos/monday_logo_short.png"/>
                    </Link>                          
                </div>
                <div className='login-signup-router-wrapper'>
                <div className={errors_class}>{this.renderErrors()}</div>
                    <div className='login-signup-div-wrapper'>
                        <h1 className='login-signup-header'>Log in</h1>
                            <div className='e-mail-input-submit-wrapper'>
                                <form onSubmit={this.handleSubmit}>
                                    <div className='form-input-wrapper'>
                                        <span id='form-label'>Email</span>
                                        <input
                                            className='login-signup-text-box'
                                            type='text'
                                            value={this.state.email}
                                            onChange={this.update('email')}
                                            placeholder='example@company.com'
                                        />
                                    </div>
                                    <div className='form-input-wrapper'>
                                        <span id='form-label'>Password</span> 
                                        <input
                                            className='login-signup-text-box'
                                            type='password'
                                            value={this.state.password}
                                            onChange={this.update('password')}
                                            placeholder='password'
                                        />
                                    </div>
                                    <div >
                                        <button
                                            className='login-action-button-wrapper'
                                            type='submit'>Login</button>
                                    </div>
                                </form>
                                <div className='or-sign-in-with-separator'>
                                    <span className='separator-line'></span>
                                    <h2>Or Sign in with</h2>
                                    <span className='separator-line'></span>
                                </div>
                                <div className='demo-user'>
                                    <button 
                                        className='login-action-button-wrapper'
                                        type='submit' 
                                        onClick={() => this.props.processForm(demoUser)}>Demo User</button>
                                </div>
                                <br></br>
                                <div className='sign-up-option-login-form'>
                                    <span>Don't have an account yet?</span>
                                    <Link to='/signup'> Sign up</Link>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginForm;
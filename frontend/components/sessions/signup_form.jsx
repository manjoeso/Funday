import React from 'react'
import {Link, Redirect} from 'react-router-dom'
 
class SignupForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        email: "",
        password: "",
        name: "",
      }
      this.handleSubmit = this.handleSubmit.bind(this)
    }

    update(field) {
        return e => this.setState({[field]: e.currentTarget.value})
    }
    handleSubmit(e) {
        e.preventDefault();
        // const user = Object.assign({}, this.state);
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
        );
    }

    componentWillUnmount () {
        this.props.removeErrors();
    }
    
    render () {
        let errors_class = '';
        if (this.props.errors.length > 0) { 
            errors_class = 'login-signup-error-display'
        }

        return (
            <div className='login-funday-container'>
                <div className='login-signup-router-wrapper'>
                    <div className='login-signup-div-wrapper'>
                    <div className={errors_class}>{this.renderErrors()}</div>
                        <h1 className='login-signup-header'>Sign Up</h1>
                            {/* <div className='login-signup-email-form'>
                            </div> */}
                            <div className='e-mail-input-submit-wrapper'>
                                <form onSubmit={this.handleSubmit}>
                                    <div className='form-input-wrapper'>
                                        <span id='form-label'>Full Name</span>
                                        <input
                                            className='login-signup-text-box'
                                            type='text'
                                            value={this.state.name}
                                            onChange={this.update('name')}
                                            placeholder='John Smith'
                                        />
                                    </div>
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
                                        />
                                    </div>
                                    <div >
                                        <button className='login-action-button-wrapper'>Sign Up</button>
                                    </div>
                                </form>
                                <br></br>
                                <div className='sign-up-option-login-form'>
                                    <span>Already have an account?</span>
                                    <Link errors={[]} to='/login'>Log in</Link>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignupForm;
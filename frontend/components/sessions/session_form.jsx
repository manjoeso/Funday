import React from 'react'
import {Link, Redirect} from 'react-router-dom'

class SessionForm extends React.Component {
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
        );
    }
    
    render () {
        let title = this.props.formType
        if (title === 'signup'){
            title = 'Sign Up'
        } else if (title === 'login') {
            title = 'Log in to your account'
        }

        return (
            <div>
                <h2>{title}</h2>
                <form onSubmit={this.handleSubmit}>
                    {this.renderErrors()}
                    <br></br>
                    <label>Enter email 
                        <br></br>
                        <input
                            type='text'
                            value={this.state.email}
                            onChange={this.update('email')}
                        />
                    </label>
                    <br></br>
                    <label>Enter your password
                        <br></br>
                        <input
                            type='password'
                            value={this.state.password}
                            onChange={this.update('password')}
                        />
                    </label>
                    {/* <Link to="/">Click to {this.props.formType}</Link> */}

                    <button type='submit'>{this.props.formType}</button>
                </form>
            </div>
        )
    }
}

export default SessionForm;
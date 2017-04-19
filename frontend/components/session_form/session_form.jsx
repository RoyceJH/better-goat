import React from 'react';
import { Link } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username:"", password: ""};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state);
    this.setState({username:"", password:""});
  }

  navLink() {
    if (this.props.formType === 'login') {
      return (
        <div className='alt-link'>
          <span>Don't have an account?</span>
          <Link to="/signup">Create Account</Link>
        </div>
      );
    } else {
      return (
        <div className='alt-link'>
          <span>Already have an account?</span>
          <Link to="/login">{'Sign in'}</Link>
        </div>
      );
    }
  }

  render() {
    const action = this.props.formType === 'login' ? 'Sign In' : 'Create Account';
    const passwordPlaceholder = this.props.formType === 'login' ? 'Password' : 'Create a password';
    return(
      <div className='auth-main'>

        <div className='auth-header'>
          <label>LOGOHERE</label>
          <label>{action}</label>
        </div>

        <div className='auth-form'>

          <form onSubmit={this.handleSubmit}>

            <input
              placeholder='Email address or username'
              onChange={this.handleChange('username')}
              type='text'
              value={this.state.username}
              />

            <input
              placeholder={passwordPlaceholder}
              onChange={this.handleChange('password')}
              type='password'
              value={this.state.password}
              />

            <input className='submit' type='submit' value={action}/>
          </form>
          {this.navLink()}
        </div>
      </div>
    );
  }
}

export default SessionForm;

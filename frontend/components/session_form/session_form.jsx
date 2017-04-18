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
        <div className='account-create-link'>
          <span>Don't have an account?</span>
          <Link to="/signup">Create Account</Link>
        </div>
      );
    } else {
      return (
        <div className='account-login-link'>
          <span>Already have an account?</span>
          <Link to="/login">{'Sign in'}</Link>
        </div>
      );
    }
  }

  render() {
    const button = this.props.formType === 'login' ? 'Sign In' : 'Create Account';
    return(
      <div>
        <form onSubmit={this.handleSubmit} className='auth-form'>

          <label>Username</label>
          <input
            onChange={this.handleChange('username')}
            type='text'
            value={this.state.username}
            />

          <label>Password</label>
          <input
            onChange={this.handleChange('password')}
            type='password'
            value={this.state.password}
            />

          <input type='submit' value={button}/>
        </form>
        {this.navLink()}
      </div>
    );
  }
}

export default SessionForm;

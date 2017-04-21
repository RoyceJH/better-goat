import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username:"", password: ""};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.guestLogin = this.guestLogin.bind(this);
    this.navLink = this.navLink.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if(this.props.errors === newProps.errors) {
      this.props.clearErrors();
    }
  }

  handleChange(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  guestLogin(e) {
    const username = ['g', 'u', 'e', 's', 't', 'u', 's', 'e', 'r'];
    const password = ['p', 'a', 's', 's', 'w', 'o', 'r' ,'d'];

    let usernameEnter = setInterval( () => {
      let nextInput = this.state.username.length;
      if(nextInput >= username.length) {
        clearInterval(usernameEnter);
        let passwordEnter = setInterval( () => {
          nextInput = this.state.password.length;
          if(nextInput >= password.length) {
            clearInterval(passwordEnter);
            this.handleSubmit(e);
          } else {
            this.setState({password: this.state.password + password[nextInput]});
          }
        }, 100);
      } else {
        this.setState({username: this.state.username + username[nextInput]});
      }
    }, 100);

  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state).then(() => this.props.router.push('/home'));
    this.setState({username:"", password:""});
  }

  renderErrors() {
    return(
      <ul className='auth-errors'>
        {this.props.errors.map((err, idx) => {
          return <li key={idx}>{err}.</li>;
        })}
      </ul>
    );
  }

  navLink() {
    if (this.props.formType === 'login') {
      return (
        <div className='alt-link'>
          <span>Don't have an account?</span>
          <Link to="/signup">Create Account</Link>
          <Link onClick={this.guestLogin}>Demo User</Link>
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
    const usernamePlaceholder = this.props.formType === 'login' ? 'Username' : 'Create a username';
    return(
      <div className='auth-main'>

        <div className='auth-header'>
          <label>LOGOHERE</label>
          <label>{action}</label>
        </div>

        <div className='auth-form'>

          <form onSubmit={this.handleSubmit}>

            <input
              placeholder={usernamePlaceholder}
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

            {this.renderErrors()}

            <input className='submit' type='submit' value={action}/>
          </form>
          {this.navLink()}
        </div>
      </div>
    );
  }
}

export default SessionForm;

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
            this.setState({password: password.join("")});
          }
        }, 100);
      } else {
        this.setState({username: username.join("")});
      }
    }, 100);
    // this.setState({username: 'guestuser', password: 'password'}, this.handleSubmit(e));
  }

  handleSubmit(e) {
    e.preventDefault();

    // if(this.props.formType === 'signup') {
    //   const file = this.state.imageFile;
    //   const formData = new FormData();
    //   formData.append('user[image]', file);
    //   formData.append('user[username]', this.state.username);
    //   formData.append('user[password]', this.state.password);
    // } else {
    //  const formData = this.state;
    // }

    let formData = this.state;

    this.props.processForm(formData).then(() => this.props.router.push('/home'));
    this.setState({username:"", password:""});
  }

  updateFile(e) {
    var reader = new FileReader();
    var file = e.currentTarget.files[0];
    reader.onloadend = function() {
      this.setState({ imageUrl: reader.result, imageFile: file});
    }.bind(this);

    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ imageUrl: "", imageFile: null });
    }
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
          <img className='logo auth' src='https://s3.amazonaws.com/bettergoat-pro/evergoat-logo.png'/>
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

import React from 'react';
import { withRouter } from 'react-router';

//Make a container for this
class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.state =({username: "", password: ""});
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.redirectGuestLogin = this.redirectGuestLogin.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if(this.props.errors === newProps.errors) {
      this.props.clearErrors();
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(this.state).then(() => this.props.router.push('/home'));
  }

  redirectGuestLogin() {
    this.props.login({username:'guestuser', password:'password'}).then(() => this.props.router.push('/home'));
  }

  handleChange(field) {
    return (e) => {
      let value = e.target.value;
      this.setState({[field]: value});
    };
  }

  render() {
    //Refactor slice of state to accomodate auth error types
    let u = [];
    let p = [];
    this.props.errors.forEach( (error) => {
      error.startsWith('U') ? u.push(error) : p.push(error);
    });

    let uErrors = u.map( (error) => {
      return <li key='1'>{error}</li>;
    });

    let pErrors = p.map( (error) => {
      return <li key='2' >{error}</li>;
    });


    return(
      <div className='greeting'>
        <h1>Remember Most Things</h1>

        <p>
          Inspiration strikes anywhere. Bettergoat lets you capture,
          nurture, and share your ideas across this device.
        </p>
        <br/>

        <form className='greeting-form' onSubmit={this.handleSubmit}>

          <div className='greeting-inputs'>
            <input onChange={this.handleChange('username')} type='text' placeholder='Username'></input>
            <input onChange={this.handleChange('password')} type='password' placeholder='Password'></input>
          </div>

          <ul className='greeting-error'>
            <span>{uErrors}</span>
            <span>{pErrors}</span>
          </ul>

          <input className='greeting-submit' type='submit' value='SIGN UP FOR FREE'/>
        </form>

        <div className='underline'></div>

        <input onClick={this.redirectGuestLogin} className='greeting-guest-login' type='submit' value='GUEST LOGIN'/>
      </div>
    );
  }
}




export default withRouter(Greeting);

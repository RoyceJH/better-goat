import React from 'react';
import { withRouter } from 'react-router';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.state =({username: "", password: ""});
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
      return <li>{error}</li>;
    });

    let pErrors = p.map( (error) => {
      return <li>{error}</li>;
    });


    return(
      <div className='greeting'>
        <h1>Remember Most Things</h1>

        <p>
          Inspiration strikes anywhere. Bettergoat lets you capture,
          nurture, and share your ideas across any device.
        </p>

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
      </div>
    );
  }
}




export default withRouter(Greeting);

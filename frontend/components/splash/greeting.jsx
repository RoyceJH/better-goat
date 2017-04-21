import React from 'react';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.state =({username: "", password: ""});
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(this.state);
  }

  handleChange(field) {
    return (e) => {
      let value = e.target.value;
      this.setState({[field]: value});
    };
  }

  render() {
    return(
      <div className='greeting'>
        <h1>Remember Most Things</h1>

        <p>
          Inspiration strikes anywhere. Evernote lets you capture,
          nurture, and share your ideas across any device.
        </p>

        <form className='greeting-form' onSubmit={this.handleSubmit}>

          <div className='greeting-inputs'>
            <input onChange={this.handleChange('username')} type='text' placeholder='Username'></input>
            <input onChange={this.handleChange('password')}type='password' placeholder='Password'></input>
          </div>

          <input className='greeting-submit' type='submit' value='SIGN UP FOR FREE'/>
        </form>

        <hr></hr>
      </div>
    );
  }
}




export default Greeting;

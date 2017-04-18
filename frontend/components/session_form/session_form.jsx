import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username:"", password: ""};
  }

  handleChange(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  render() {
    return(
      <form className='auth-form'>

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

      </form>
    );
  }
}

export default SessionForm;

import React, { Component } from 'react';
import { connect } from 'react-redux';
class Login extends Component {
  handleSelection = (e) => {
    e.preventDefault();
    console.log('test selection');
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log('test submit');
  };
  render() {
    return (
      <div className='login'>
        <div className='login-header'>
          <h1>Welcome to the Would You Rather App!</h1>
          <h3>Please sign in to continue </h3>
        </div>
        <div className='login-form-container'>
          <div className='login-logo'>
            <img
              src='https://avatars.dicebear.com/4.5/api/male/.svg'
              className='avatar-logo'
              alt='login avatar'
            />
          </div>
          <div className='login-form'>
            <h3>Login</h3>
            <select onChange={this.handleSelection}>
              <option value='default'>Select User</option>
              <option value='v'>B</option>
            </select>
            <button onClick={this.handleSubmit}>Sign In</button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(Login);

import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser';
import LoadingBar from 'react-redux-loading-bar';
class Login extends Component {
  state = {
    user: '',
  };
  handleSelection = (e) => {
    e.preventDefault();
    const value = e.target.value;

    this.setState({ user: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { user } = this.state;
    this.props.dispatch(setAuthedUser(user));
    this.setState({ users: '' });
  };
  render() {
    const { users } = this.props;
    const { user } = this.state;
    return (
      <Fragment>
        <LoadingBar />
        <div className='login'>
          <div className='login-header'>
            <h1>Welcome to the Would You Rather App!</h1>
            <h3>Please sign in to continue </h3>
          </div>
          <div className='login-form-container'>
            <div className='login-logo'>
              <img
                src='https://avatars.dicebear.com/4.5/api/bottts/y.svg'
                className='avatar-logo'
                alt='login avatar'
              />
            </div>
            <div className='login-form'>
              <h3>Login</h3>
              <div className='users-info'>
                {users.length !== 0 && <p>Select from {users.length} users</p>}

                <div className='users-avatar'>
                  {users &&
                    users.map((user) => (
                      <div key={user.id}>
                        <img src={user.avatarURL} alt={user.name} />
                        <p>{user.name}</p>
                      </div>
                    ))}
                </div>
              </div>
              <select onChange={this.handleSelection}>
                <option value=''>Select User</option>
                {users.map((user) => (
                  <option key={user.id} value={user.name}>
                    {user.name}
                  </option>
                ))}
              </select>
              <button
                onClick={this.handleSubmit}
                disabled={user.length > 1 ? false : true}
                className={user.length > 1 ? 'active' : 'notActive'}>
                Sign In
              </button>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ authedUser, users }) => {
  return { authedUser, users: Object.values(users) };
};

export default connect(mapStateToProps)(Login);

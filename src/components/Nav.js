import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser';
class Nav extends Component {
  state = {
    toHome: false,
  };
  handleLogout = (e) => {
    e.preventDefault();
    this.props.dispatch(setAuthedUser(null));
  };

  render() {
    const { user } = this.props;
    return (
      <div className='nav'>
        <div className='links'>
          <Link to='/' className='link'>
            Home
          </Link>
          <Link to='newQuestion' className='link'>
            New Question
          </Link>
          <Link to='leaderBoard' className='link'>
            LeaderBoard
          </Link>
        </div>
        <div className='nav-login'>
          <div className='login-data'>
            <span>
              <span className='hello'>Hello,</span> {user.name}
            </span>
            <img src={user.avatarURL} alt={user.id} className='avatar' />
          </div>
          <button onClick={this.handleLogout} className='logout'>
            Logout
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ authedUser, users }) => {
  return {
    authedUser,
    user: users[authedUser.split(' ').join('').toLowerCase()],
  };
};
export default connect(mapStateToProps)(Nav);

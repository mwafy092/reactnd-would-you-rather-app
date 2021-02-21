import React, { Component } from 'react';

class BadRoute extends Component {
  render() {
    return (
      <div className='bad-route'>
        <h1>No Match 404 Error</h1>
        <p>Please use the menu to try again.</p>
        <img
          src='https://avatars.dicebear.com/4.5/api/bottts/ad.svg'
          alt='error robot'
        />
      </div>
    );
  }
}

export default BadRoute;

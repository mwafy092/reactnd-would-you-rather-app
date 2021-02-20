import React, { Component } from 'react';
import { connect } from 'react-redux';
class Home extends Component {
  state = {
    active: '',
  };

  switcher = (value) => {
    this.setState({ active: value });
  };
  render() {
    const { active } = this.state;
    return (
      <div className='questions'>
        <div className='questions-switcher'>
          <span
            className={
              active === 'all' ? 'switcher active-switcher' : 'switcher'
            }
            onClick={() => this.switcher('all')}>
            All questions
          </span>
          <span
            className={
              active !== 'all' ? 'switcher active-switcher' : 'switcher'
            }
            onClick={() => this.switcher('unanswered')}>
            Unanswered questions
          </span>
        </div>
        <div className='questions-container'></div>
      </div>
    );
  }
}

export default connect()(Home);

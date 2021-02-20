import React, { Component } from 'react';
import { connect } from 'react-redux';
import AnsweredQuestions from './AnsweredQuestions';
import UnansweredQuestions from './UnansweredQuestions';
class Home extends Component {
  state = {
    active: 'all',
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
            Answered questions
          </span>
          <span
            className={
              active !== 'all' ? 'switcher active-switcher' : 'switcher'
            }
            onClick={() => this.switcher('unanswered')}>
            Unanswered questions
          </span>
        </div>
        <div className='questions-container'>
          {active === 'all' ? <AnsweredQuestions /> : <UnansweredQuestions />}
        </div>
      </div>
    );
  }
}

export default connect()(Home);

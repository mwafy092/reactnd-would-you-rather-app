import React, { Component } from 'react';
import { connect } from 'react-redux';
import AnsweredQuestions from './AnsweredQuestions';
import UnansweredQuestions from './UnansweredQuestions';
class Home extends Component {
  state = {
    active: 'unanswered',
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
              active !== 'answered' ? 'switcher active-switcher' : 'switcher'
            }
            onClick={() => this.switcher('unanswered')}>
            Unanswered questions
          </span>
          <span
            className={
              active === 'answered' ? 'switcher active-switcher' : 'switcher'
            }
            onClick={() => this.switcher('answered')}>
            Answered questions
          </span>
        </div>
        <div className='questions-container'>
          {active === 'answered' ? (
            <AnsweredQuestions />
          ) : (
            <UnansweredQuestions />
          )}
        </div>
      </div>
    );
  }
}

export default connect()(Home);

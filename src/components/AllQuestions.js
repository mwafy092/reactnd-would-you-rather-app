import React, { Component } from 'react';
import { connect } from 'react-redux';
class AllQuestions extends Component {
  render() {
    const { questions, users } = this.props;
    return (
      <div className='all-question'>
        {Object.keys(questions).map((key) => {
          const user = users[questions[key].author];
          return (
            <div key={key} className='question'>
              <p className='question-header'>{user.name} asks</p>
              <div className='question-data'>
                <div className='question-user-avatar'>
                  <img src={user.avatarURL} alt={user.name} />
                </div>
                <div className='question-info'>
                  <h3>Would you rather</h3>
                  <p>{questions[key].optionOne.text}</p>
                  <h4>OR</h4>
                  <p>{questions[key].optionTwo.text}</p>
                  <button>View Poll</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = ({ questions, users }) => {
  return {
    questions,
    users,
  };
};
export default connect(mapStateToProps)(AllQuestions);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formatDate } from '../utils/helpers';
class AnsweredQuestions extends Component {
  render() {
    const { questions, users, user } = this.props;
    console.log(user.answers);
    const sortedAnswered = Object.keys(user.answers)
      .map((key) => questions[key])
      .sort((a, b) => b.timestamp - a.timestamp);
    return (
      <div className='all-question'>
        {sortedAnswered.map((item) => {
          const user = users[item.author];
          return (
            <div key={item.id} className='question'>
              <p className='question-date'>{formatDate(item.timestamp)}</p>
              <p className='question-header'>{user.name} asks</p>
              <div className='question-data'>
                <div className='question-user-avatar'>
                  <img src={user.avatarURL} alt={user.name} />
                </div>
                <div className='question-info'>
                  <h3>Would you rather</h3>
                  <p>{item.optionOne.text}</p>
                  <h4>OR</h4>
                  <p>{item.optionTwo.text}</p>
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

const mapStateToProps = ({ questions, users, authedUser }) => {
  return {
    questions,
    users,
    user: users[authedUser.split(' ').join('').toLowerCase()],
  };
};
export default connect(mapStateToProps)(AnsweredQuestions);

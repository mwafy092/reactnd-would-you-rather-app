import React, { Component } from 'react';
import { connect } from 'react-redux';

class Question extends Component {
  render() {
    const questionId = this.props.match.params.id;
    const { authedUser, users, questions } = this.props;
    const user = users[authedUser.split(' ').join('').toLowerCase()];
    const answered = Object.keys(user.answers).includes(questionId);
    const quest = questions[questionId];

    if (answered) {
      return (
        <div className='poll'>
          <p className='poll-header'>Asked by {quest.author}</p>
          <div className='poll-data'>
            <div className='poll-avatar'>
              <img src={users[quest.author].avatarURL} alt={user.name} />
            </div>
            <div className='poll-result'>
              <h3>Results:</h3>
              <div className='poll-one'>
                <p>{quest.optionOne.text}</p>
                <p className='poll-votes'>
                  has {quest.optionOne.votes.length} vote
                </p>
                {quest.optionOne.votes.includes(user.id) && (
                  <p className='your-vote'>
                    Your
                    <br />
                    Vote
                  </p>
                )}
              </div>
              <div className='poll-two'>
                <p>{quest.optionTwo.text}</p>
                <p className='poll-votes'>
                  has {quest.optionTwo.votes.length} vote
                </p>
                {quest.optionTwo.votes.includes(user.id) && (
                  <p className='your-vote'>
                    Your
                    <br />
                    Vote
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      );
    }
    return <div>Not answered</div>;
  }
}

const mapStateToProps = ({ authedUser, users, questions }) => {
  return {
    authedUser,
    users,
    questions,
  };
};

export default connect(mapStateToProps)(Question);

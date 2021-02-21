import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleSaveQuestionAnswer } from '../actions/users';
import ProgressBar from '@ramonak/react-progress-bar';
import { Redirect } from 'react-router-dom';
import BadRoute from './BadRoute';
class Question extends Component {
  state = {
    selectedOption: '',
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log('test');
    const { authedUser, dispatch } = this.props;
    const user = authedUser.split(' ').join('').toLowerCase();
    const qid = this.props.match.params.id;
    const answer = this.state.selectedOption;
    console.log(user, qid, answer);
    dispatch(handleSaveQuestionAnswer(user, qid, answer));
  };

  handleChange = (e) => {
    this.setState({ selectedOption: e.target.value });
  };

  render() {
    const questionId = this.props.match.params.id;
    const { authedUser, users, questions } = this.props;
    const user = users[authedUser.split(' ').join('').toLowerCase()];
    const answered = Object.keys(user.answers).includes(questionId);
    const quest = questions[questionId];
    const secureID = Object.keys(questions).includes(questionId);
    const optionOneVotes = secureID && quest.optionOne.votes.length;
    const optionTwoVotes = secureID && quest.optionTwo.votes.length;
    const votesTotal = optionOneVotes + optionTwoVotes;

    if (!secureID) {
      return <BadRoute />;
    }

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
                <ProgressBar
                  labelAlignment={'right'}
                  bgcolor={'#02733e'}
                  completed={Math.round((optionOneVotes / votesTotal) * 100)}
                />
                <p className='poll-votes'>
                  {optionOneVotes} out of {votesTotal} votes
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
                <ProgressBar
                  labelAlignment={'right'}
                  bgcolor={'#02733e'}
                  completed={Math.round((optionTwoVotes / votesTotal) * 100)}
                />
                <p className='poll-votes'>
                  {optionTwoVotes} out of {votesTotal} votes
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
    return (
      <div className='poll'>
        <p className='poll-header'>Asked by {quest.author}</p>
        <div className='poll-data'>
          <div className='poll-avatar'>
            <img src={users[quest.author].avatarURL} alt={user.name} />
          </div>
          <div>
            <h3>Would you rather</h3>
            <form>
              <div className='poll-option'>
                <label>
                  <input
                    type='radio'
                    name='group'
                    onChange={this.handleChange}
                    value={'optionOne'}
                  />
                  {quest.optionOne.text}
                </label>
              </div>
              <div className='poll-option'>
                <label>
                  <input
                    type='radio'
                    name='group'
                    onChange={this.handleChange}
                    value={'optionTwo'}
                  />
                  {quest.optionTwo.text}
                </label>
              </div>
              <button className='poll-btn' onClick={this.handleSubmit}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
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

import React, { Component } from 'react';
import { connect } from 'react-redux';
class LeaderBoard extends Component {
  render() {
    const { users } = this.props;
    const usersData = Object.keys(users);
    const leaderboardData = [];
    usersData.map((data) => {
      const userName = users[data].name;
      const answeredQuestions = Object.keys(users[data].answers).length;
      const createdQuestions = users[data].questions.length;
      const score = answeredQuestions + createdQuestions;
      const avatarURL = users[data].avatarURL;
      leaderboardData.push({
        userName,
        answeredQuestions,
        createdQuestions,
        score,
        avatarURL,
      });
    });

    return (
      <div className='leaderboard'>
        {leaderboardData
          .sort((a, b) => b.score - a.score)
          .map((user) => (
            <div className='leaderboard-user' key={user.userName}>
              <div className='user-avatar'>
                <img src={user.avatarURL} alt={user.name} />
              </div>
              <div className='user-data'>
                <h2>{user.userName}</h2>
                <p>
                  <span>Answered Questions</span>
                  <span>{user.answeredQuestions}</span>
                </p>
                <p>
                  <span>Created Questions</span>
                  <span>{user.createdQuestions}</span>
                </p>
              </div>
              <div className='leaderboard-score'>
                <h2>Score</h2>
                <p>
                  <span>{user.score}</span>
                </p>
              </div>
            </div>
          ))}
      </div>
    );
  }
}

const mapStateToProps = ({ users }) => {
  return {
    users,
  };
};
export default connect(mapStateToProps)(LeaderBoard);

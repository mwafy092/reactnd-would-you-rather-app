import React, { Component, Fragment } from 'react';
import { handleSaveQuestion } from '../actions/questions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import LoadingBar from 'react-redux-loading-bar';

class NewQuestion extends Component {
  state = {
    optionOne: '',
    optionTwo: '',
    status: false,
  };
  optionOne = (e) => {
    this.setState({ optionOne: e.target.value });
  };
  optionTwo = (e) => {
    this.setState({ optionTwo: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { dispatch, authedUser } = this.props;
    const user = authedUser.split(' ').join('').toLowerCase();
    const { optionOne, optionTwo } = this.state;
    dispatch(handleSaveQuestion(optionOne, optionTwo, user));
    this.setState({ optionOne: '', optionTwo: '', status: true });
  };
  render() {
    const { status } = this.state;
    const { loadingBar } = this.props;
    if (status && loadingBar.default === 0) {
      return <Redirect to='/' />;
    }

    return (
      <Fragment>
        <LoadingBar />
        <div className='post-poll'>
          <h2>Create new poll</h2>
          <div className='new-poll'>
            <h3>Would you rather :</h3>
            <input
              value={this.state.optionOne}
              type='text'
              placeholder='option one'
              onChange={this.optionOne}
            />
            <h4>OR</h4>
            <input
              value={this.state.optionTwo}
              type='text'
              placeholder='option two'
              onChange={this.optionTwo}
            />
            <button onClick={this.handleSubmit}>Submit</button>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ authedUser, loadingBar }) => {
  return {
    authedUser,
    loadingBar,
  };
};
export default connect(mapStateToProps)(NewQuestion);

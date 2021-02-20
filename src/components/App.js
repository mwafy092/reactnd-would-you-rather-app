import React, { Component, Fragment } from 'react';
import handleInitialData from '../actions/shared';
import { connect } from 'react-redux';
import Login from './Login';
import Home from './Home';
import { Route } from 'react-router-dom';
import NewQuestion from './NewQuestion';
import LeaderBoard from './LeaderBoard';
import Question from './Question';
import Nav from './Nav';
class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    const { authedUser } = this.props;

    return (
      <div className='app'>
        {authedUser === null ? (
          <Login />
        ) : (
          <Fragment>
            <Nav />
            <Route path='/' exact component={Home} />
            <Route path='/newQuestion' component={NewQuestion} />
            <Route path='/leaderBoard' component={LeaderBoard} />
            <Route path='/questions/:id' component={Question} />
          </Fragment>
        )}
      </div>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}
export default connect(mapStateToProps)(App);

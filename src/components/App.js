import React, { Component, Fragment } from 'react';
import handleInitialData from '../actions/shared';
import { connect } from 'react-redux';
import Login from './Login';
import Nav from './Nav';
import Home from './Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    const { authedUser } = this.props;

    return (
      <Router>
        <div className='app'>
          {authedUser === null ? (
            <Route render={() => <Route path='/' exact component={Login} />} />
          ) : (
            <Fragment>
              <Nav />
            </Fragment>
          )}
        </div>
      </Router>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}
export default connect(mapStateToProps)(App);

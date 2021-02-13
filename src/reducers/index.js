import authedUser from './authedUser';
import users from './users';
import questions from './questions';
import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading-bar';
export default combineReducers({
  authedUser,
  users,
  questions,
  loadingBar: loadingBarReducer,
});

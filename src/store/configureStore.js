import {createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import snakeReducer from '../reducers/snake';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default () => {
  return createStore(
    combineReducers({ snakeReducer: snakeReducer }),
    composeEnhancers(applyMiddleware(thunk))
  );
}
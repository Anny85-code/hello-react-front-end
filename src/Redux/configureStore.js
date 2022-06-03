import {
  createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import greetingReducer from './greetings/GreetingReducer';

const rootReducer = combineReducers({
  greetings: greetingReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

export default store;

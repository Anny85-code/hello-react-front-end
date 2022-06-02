import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import greetingReducer from './greetings/greetingReducer';

const rootReducer = combineReducers({
  greetings: greetingReducer,
});

const store = createStore(rootReducer, compose(applyMiddleware(logger, thunk)));

export default store;



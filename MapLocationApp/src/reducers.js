/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';

import appReducer from './reducer';


/**
 * Creates the main reducer with the dynamically injected ones
 */
const rootReducer = combineReducers({
  app: appReducer
});

export default rootReducer;

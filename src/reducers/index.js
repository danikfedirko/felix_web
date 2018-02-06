import { combineReducers } from 'redux';
import markers from './markers';
import fbUserData from './fbUserData';

export default combineReducers({
  markers,
  fbUserData,
});

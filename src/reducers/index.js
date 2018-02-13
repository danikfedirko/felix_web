import { combineReducers } from 'redux';
import markers from './markersReducer';
import fbUserData from './loginReducer';

export default combineReducers({
  markers,
  fbUserData,
});

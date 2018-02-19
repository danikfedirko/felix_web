import { combineReducers } from 'redux';
import markers from './markersReducer';
import userData from './loginReducer';

export default combineReducers({
  markers,
  userData,
});

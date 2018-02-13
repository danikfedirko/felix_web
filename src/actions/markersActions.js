import fetchData from 'services/dbService';
import { RECEIVE_MARKERS } from './actionTypes';

const receiveMarkers = markers => ({
  type: RECEIVE_MARKERS,
  payload: {
    markers,
  },
});

export const fetchMarkers = () => dispatch => {
  fetchData('markers').then(snapshot => {
    dispatch(receiveMarkers(snapshot.val()));
  });
};

export default null;

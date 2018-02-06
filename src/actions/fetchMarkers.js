import fetchMarkersData from 'services/dbService';
import { receiveMarkers } from './receiveMarkers';

export const FETCH_MARKERS = 'FETCH_MARKERS';

export const fetchMarkers = () => dispatch => {
  dispatch({ type: FETCH_MARKERS });
  const ref = fetchMarkersData();
  ref.once('value').then(snapshot => {
    dispatch(receiveMarkers(snapshot.val()));
  });
};

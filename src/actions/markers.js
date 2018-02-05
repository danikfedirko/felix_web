import fire from 'fire';

export const FETCH_MARKERS = 'FETCH_MARKERS';
export const RECEIVE_MARKERS = 'RECEIVE_MARKERS';
export const FETCH_MARKERS_ERROR = 'FETCH_MARKERS_ERROR';

export function receiveMarkers(markers) {
  return {
    type: RECEIVE_MARKERS,
    payload: {
      markers,
    },
  };
}

export function fetchMarkers() {
  return dispatch => {
    dispatch({ type: FETCH_MARKERS });
    const ref = fire.database().ref('markers');
    ref.once('value').then(snapshot => {
      dispatch(receiveMarkers(snapshot.val()));
    });
  };
}

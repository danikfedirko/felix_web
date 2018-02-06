export const RECEIVE_MARKERS = 'RECEIVE_MARKERS';

export const receiveMarkers = markers => ({
  type: RECEIVE_MARKERS,
  payload: {
    markers,
  },
});

import { FETCH_MARKERS } from 'actions/fetchMarkers';
import { RECEIVE_MARKERS } from 'actions/receiveMarkers';

const defaultState = {
  fetching: false,
  markers: [],
};

export default function markers(state = defaultState, action) {
  switch (action.type) {
    case FETCH_MARKERS:
      return {
        ...state,
        fetching: true,
      };
    case RECEIVE_MARKERS:
      return {
        ...state,
        fetching: false,
        markers: action.payload.markers,
      };
    default:
      return state;
  }
}

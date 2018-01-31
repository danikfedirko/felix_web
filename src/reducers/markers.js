import {
  FETCH_MARKERS,
  RECEIVE_MARKERS,
  FETCH_MARKERS_ERROR,
} from '../actions/markers';

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
    case FETCH_MARKERS_ERROR:
      return {
        ...state,
        fetching: false,
      };
    default:
      return state;
  }
}

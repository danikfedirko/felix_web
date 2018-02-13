import { RECEIVE_MARKERS } from 'actions/actionTypes';

const defaultState = {
  fetching: false,
  markers: [],
};

export default function markers(state = defaultState, action) {
  switch (action.type) {
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

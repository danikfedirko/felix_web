import {
  FETCH_FB_USER_DATA,
  FETCH_INSTAGRAM_USER_DATA,
} from 'actions/actionTypes';

const defaultState = {
  isLoggedIn: false,
  username: null,
  picture: null,
  id: null,
};

export default function userData(state = defaultState, action) {
  switch (action.type) {
    case FETCH_FB_USER_DATA:
      return {
        ...state,
        isLoggedIn: true,
        username: action.payload.username,
        picture: action.payload.picture,
        id: action.payload.id,
      };
    case FETCH_INSTAGRAM_USER_DATA:
      return {
        ...state,
        isLoggedIn: true,
        username: action.payload.username,
        picture: action.payload.picture,
        id: action.payload.id,
      };
    default:
      return state;
  }
}

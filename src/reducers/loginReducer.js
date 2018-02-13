import { FETCH_FB_USER_DATA } from 'actions/actionTypes';

const defaultState = {
  loggedIn: false,
  username: null,
  picture: null,
  id: null,
};

export default function fbUserData(state = defaultState, action) {
  switch (action.type) {
    case FETCH_FB_USER_DATA:
      return {
        ...state,
        loggedIn: true,
        username: action.payload.username,
        picture: action.payload.picture,
        id: action.payload.id,
      };

    default:
      return state;
  }
}

import { FETCH_FB_USER_DATA } from './actionTypes';

export const fetchFbUserData = response => ({
  type: FETCH_FB_USER_DATA,
  payload: {
    isLoggedIn: true,
    username: response.name,
    picture: response.picture.data.url,
    id: response.id,
  },
});

export default null;

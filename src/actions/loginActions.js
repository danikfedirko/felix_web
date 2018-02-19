import { FETCH_FB_USER_DATA, FETCH_INSTAGRAM_USER_DATA } from './actionTypes';

export const fetchFbUserData = response => ({
  type: FETCH_FB_USER_DATA,
  payload: {
    isLoggedIn: true,
    username: response.name,
    picture: response.picture.data.url,
    id: response.id,
  },
});

export const fetchInstagramUserData = response => ({
  type: FETCH_INSTAGRAM_USER_DATA,
  payload: {
    isLoggedIn: true,
    username: response.username,
    picture: response.profile_picture,
    id: response.id,
  },
});

export const loginAction = (response, key) => {
  if (key === 'facebook') {
    return fetchFbUserData(response);
  } else if (key === 'instagram') {
    return fetchInstagramUserData(response);
  }
  return null;
};

export default null;

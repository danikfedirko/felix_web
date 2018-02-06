export const FETCH_FB_USER_DATA = 'FETCH_FB_USER_DATA';

export const fetchFbUserData = response => ({
  type: FETCH_FB_USER_DATA,
  payload: {
    loggedIn: true,
    username: response.name,
    picture: response.picture,
    id: response.id,
  },
});

import axios from 'axios';

export default function getInstagramUserData(token) {
  return axios
    .get(`https://api.instagram.com/v1/users/self/?access_token=${token}`)
    .then(response => {
      const userData = response.data.data;
      return userData;
    });
}

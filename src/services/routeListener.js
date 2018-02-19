import history from '../history';
import getInstagramUserData from './instagramLoginService';

export default function routeListener() {
  const pathHash = history.location.hash;
  const token = pathHash.replace('#access_token=', '');
  const instagramUserData = getInstagramUserData(token);
  return instagramUserData;
}

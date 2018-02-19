import React from 'react';
import { instagramClientId, redirectUri } from 'consts';

class InstaLogin extends React.Component {
  render() {
    return (
      <a
        href={`https://api.instagram.com/oauth/authorize/?client_id=${instagramClientId}&redirect_uri=${redirectUri}&response_type=token`}
      >
        {' '}
        Login with Instagram
      </a>
    );
  }
}

export default InstaLogin;

import React from 'react';
import PropTypes from 'prop-types';
import FacebookLogin from 'react-facebook-login';
import { fbAppId } from 'consts';

class FbLogin extends React.Component {
  responseFacebook = response => {
    this.props.loginAction(response, 'facebook');
  };
  render() {
    return (
      <FacebookLogin
        appId={fbAppId}
        fields="name,email,picture"
        callback={this.responseFacebook}
      />
    );
  }
}

FbLogin.propTypes = {
  loginAction: PropTypes.func.isRequired,
};

export default FbLogin;

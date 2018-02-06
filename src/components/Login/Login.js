import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Modal, Avatar } from 'antd';
import FacebookLogin from 'react-facebook-login';
import { fetchFbUserData } from 'actions/fetchFbUserData';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }
  toggleLogin = () => {
    this.setState({
      visible: !this.state.visible,
    });
  };
  responseFacebook = response => {
    this.props.fetchFbUserData(response);
  };
  render() {
    const { loggedIn, picture, username } = this.props;
    return (
      <div style={{ display: 'inline-block', float: 'right' }}>
        {loggedIn ? (
          <div>
            {' '}
            Welcome, {username}{' '}
            <Avatar
              style={{ verticalAlign: 'middle', marginLeft: '1em' }}
              src={picture.data.url}
            />{' '}
          </div>
        ) : (
          <div>
            <Button type="primary" onClick={this.toggleLogin}>
              {' '}
              Login{' '}
            </Button>
            <Modal
              visible={this.state.visible}
              footer={null}
              onCancel={this.toggleLogin}
            >
              <FacebookLogin
                appId="412110992560233"
                autoLoad
                fields="name,email,picture"
                callback={this.responseFacebook}
              />
            </Modal>
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    username: state.fbUserData.username,
    picture: state.fbUserData.picture,
    loggedIn: state.fbUserData.loggedIn,
  };
}

Login.propTypes = {
  username: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  fetchFbUserData: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { fetchFbUserData })(Login);

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { Button, Modal, Avatar } from 'antd';
import FacebookLogin from 'react-facebook-login';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { fetchFbUserData } from 'actions/loginActions';
import { fbAppId } from 'consts';
import styles from './Login.sass';

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
    const { isLoggedIn, picture, username } = this.props;
    return (
      <div className={styles.loginBlock}>
        {isLoggedIn ? (
          <div>
            Welcome, {username}
            <Avatar className={styles.avatar} src={picture} />
          </div>
        ) : (
          <div>
            <Button type="primary" onClick={this.toggleLogin}>
              Login
            </Button>
            <Modal
              visible={this.state.visible}
              footer={null}
              onCancel={this.toggleLogin}
            >
              <FacebookLogin
                appId={fbAppId}
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
    isLoggedIn: state.fbUserData.isLoggedIn,
  };
}

Login.propTypes = {
  username: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  fetchFbUserData: PropTypes.func.isRequired,
};

export default compose(
  withStyles(styles),
  connect(mapStateToProps, { fetchFbUserData }),
)(Login);

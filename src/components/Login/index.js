import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import FbLogin from 'components/Login/FacebookLogin';
import InstaLogin from 'components/Login/InstagramLogin';
import { Button, Modal, Avatar } from 'antd';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { loginAction } from 'actions/loginActions';
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
              <FbLogin loginAction={this.props.loginAction} />
              <br />
              <InstaLogin />
            </Modal>
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    username: state.userData.username,
    picture: state.userData.picture,
    isLoggedIn: state.userData.isLoggedIn,
  };
}

Login.propTypes = {
  username: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  loginAction: PropTypes.func.isRequired,
};

export default compose(
  withStyles(styles),
  connect(mapStateToProps, { loginAction }),
)(Login);

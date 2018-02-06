import React from 'react';
import { Menu } from 'antd';
import Logo from 'img/logo.png';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Link from 'components/Link/Link';
import Login from 'components/Login/Login';
import styles from './MainMenu.sass';

class MainMenu extends React.Component {
  render() {
    return (
      <div id="nav" style={{ borderBottomColor: '#ccc' }}>
        <div
          className={styles.logo}
          style={{ float: 'left', marginRight: '2em' }}
        >
          <img alt="Felix Logo" src={Logo} />
          <h1>Felix</h1>
        </div>
        <Menu
          mode="horizontal"
          defaultSelectedKeys={['1']}
          style={{ lineHeight: '60px' }}
        >
          <Menu.Item key="1">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/blog">Blog</Link>
          </Menu.Item>
          <Login />
        </Menu>
      </div>
    );
  }
}
export default withStyles(styles)(MainMenu);

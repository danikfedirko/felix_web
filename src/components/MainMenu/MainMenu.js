import React from 'react';
import { Menu } from 'antd';
import Logo from 'img/logo.png';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Link from 'components/Link/Link';
import s from './MainMenu.sass';

class MainMenu extends React.Component {
  render() {
    return (
      <div id="nav">
        <div className={s.logo} style={{ float: 'left', marginRight: '2em' }}>
          <img alt="Felix Logo" src={Logo} />
          <h1>Felix</h1>
        </div>
        <Menu
          mode="horizontal"
          defaultSelectedKeys={['1']}
          style={{ lineHeight: '60px' }}
        >
          <Menu.Item key="1">Home</Menu.Item>
          <Menu.Item key="2">
            <Link to="/blog">Blog</Link>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}
export default withStyles(s)(MainMenu);

import React from 'react'
import PropTypes from 'prop-types'
import {Menu} from 'antd';
import Logo from '../../img/logo.png'
import s from './MainMenu.sass'
import withStyles from 'isomorphic-style-loader/lib/withStyles';

class MainMenu extends React.Component {
  render () {
    return(
    <div id="nav">
      <div className={s.logo} style={{float:'left',marginRight:'2em'}}><img src={Logo} /><h1>Felix</h1></div>
      <Menu mode="horizontal" defaultSelectedKeys={['1']} style={{ lineHeight: '60px' }} >
          <Menu.Item key="1">Home</Menu.Item>
          <Menu.Item key="2">Tutorials</Menu.Item>
      </Menu>
    </div>
  );
}
}
export default withStyles(s)(MainMenu)

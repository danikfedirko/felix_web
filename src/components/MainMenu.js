import React from 'react'
import PropTypes from 'prop-types'
import {Menu} from 'antd';

const MainMenu = (props) => {
  return (
    <div id="nav">
      <div className="logo" style={{float:'left',marginRight:'2em'}}><h1>Felix</h1></div>
      <Menu
        mode="horizontal"
        defaultSelectedKeys={['1']}
        style={{ lineHeight: '60px' }}
        >
          <Menu.Item key="1">Home</Menu.Item>
          <Menu.Item key="2">Tutorials</Menu.Item>
      </Menu>
    </div>
  );
}

export default MainMenu

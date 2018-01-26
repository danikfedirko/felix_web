import React from 'react'
import { Layout} from 'antd';
import appCss from './App.css';
import antd from 'antd/dist/antd.css';
import MainMenu from '../MainMenu/MainMenu';
import normalizeCss from 'normalize.css';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
const { Header, Content} = Layout;

class MainLayout extends React.Component {
  render () {
    return(
    <Layout>
      <Header style={{background:'#fff'}} className="header">
          <MainMenu/>
      </Header>
      <Content>
          {this.props.children}
      </Content>
  </Layout>
);
  }
}

export default withStyles(appCss, antd)(MainLayout);

import React from 'react'
import { Layout} from 'antd';
import antd from 'antd/dist/antd.less';
import s from './Layout.less';
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

export default withStyles(antd, s, normalizeCss)(MainLayout);

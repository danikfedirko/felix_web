import React from 'react'
import { Layout} from 'antd';
import MainMenu from '../components/MainMenu'
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

export default MainLayout;

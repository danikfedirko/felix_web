import React from 'react';
import { Layout } from 'antd';
import PropTypes from 'prop-types';
import antd from 'antd/dist/antd.less';
import MainMenu from 'components/MainMenu/MainMenu';
import normalizeCss from 'normalize.css';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import styles from './Layout.less';

const { Header, Content } = Layout;

class MainLayout extends React.Component {
  render() {
    return (
      <Layout>
        <Header style={{ background: '#fff' }} className="header">
          <MainMenu />
        </Header>
        <Content>{this.props.children}</Content>
      </Layout>
    );
  }
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default withStyles(antd, styles, normalizeCss)(MainLayout);

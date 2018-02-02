import React from 'react';
import { List, Avatar, Button, Spin, Icon } from 'antd';

class PostsList extends React.Component {
  state = {
    loading: false,
    loadingMore: false,
    showLoadingMore: true,
    data: [],
  };
  componentDidMount = () => {
    const listData = [];
    for (let i = 0; i < 10; i += 1) {
      listData.push({
        href: '/',
        title: `Blog title placeholder ${i}`,
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...',
      });
    }
    this.setState({
      data: listData,
    });
  };
  onLoadMore = () => {
    this.setState({
      loadingMore: true,
    });
    const listData = this.state.data;
    for (let i = 0; i < 10; i += 1) {
      listData.push({
        href: '/',
        title: `Blog title placeholder ${i}`,
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...',
      });
    }
    this.setState({
      data: listData,
      loadingMore: false,
    });
  };
  render() {
    const { loading, loadingMore, showLoadingMore, data } = this.state;
    const loadMore = showLoadingMore ? (
      <div
        style={{
          textAlign: 'center',
          marginTop: 12,
          height: 32,
          lineHeight: '32px',
        }}
      >
        {loadingMore && <Spin />}
        {!loadingMore && <Button onClick={this.onLoadMore}>load more</Button>}
      </div>
    ) : null;

    const IconText = ({ type, text }) => (
      <span>
        <Icon type={type} style={{ marginRight: 8 }} />
        {text}
      </span>
    );

    return (
      <List
        itemLayout="vertical"
        size="large"
        loading={loading}
        loadMore={loadMore}
        dataSource={data}
        renderItem={item => (
          <List.Item
            key={item.title}
            actions={[
              <IconText type="star-o" text="156" />,
              <IconText type="like-o" text="156" />,
              <IconText type="message" text="2" />,
            ]}
            extra={
              <img
                width={400}
                alt="logo"
                src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
              />
            }
          >
            <List.Item.Meta
              avatar={<Avatar src={item.avatar} />}
              title={<a href={item.href}>{item.title}</a>}
            />
            {item.content}
          </List.Item>
        )}
      />
    );
  }
}

export default PostsList;

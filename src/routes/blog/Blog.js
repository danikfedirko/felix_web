import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import PageTitle from 'components/PageTitle/PageTitle';
import PostsList from 'components/PostsList/PostsList';
import style from './Blog.sass';

class Blog extends React.Component {
  render() {
    return (
      <div className={style.wrapper}>
        <div className="blog-home-page">
          <PageTitle title="Blog" />
          <PostsList />
        </div>
      </div>
    );
  }
}

export default withStyles(style)(Blog);

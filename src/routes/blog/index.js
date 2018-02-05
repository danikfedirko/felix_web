import React from 'react';
import Layout from 'components/Layout';
import Blog from './Blog';

async function action() {
  return {
    chunks: ['blog'],
    title: 'Felix | Blog',
    component: (
      <Layout>
        <Blog />
      </Layout>
    ),
  };
}

export default action;

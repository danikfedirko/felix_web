import React from 'react';
import MainLayout from 'components/Layout';
import Blog from './Blog';

async function action() {
  return {
    chunks: ['blog'],
    title: 'Felix | Blog',
    component: (
      <MainLayout>
        <Blog />
      </MainLayout>
    ),
  };
}

export default action;

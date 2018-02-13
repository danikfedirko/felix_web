import React from 'react';
import PropTypes from 'prop-types';

const PageTitle = props => (
  <h1 style={{ marginBottom: '2em', textAlign: 'center' }}>{props.title}</h1>
);

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PageTitle;

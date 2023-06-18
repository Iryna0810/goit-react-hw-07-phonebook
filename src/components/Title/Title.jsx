import React from 'react';
import PropTypes from 'prop-types';

export const Title = ({ title }) => (
  <section>
    <h2>{title}</h2>
  </section>
);

Title.propTypes = { title: PropTypes.string.isRequired, };
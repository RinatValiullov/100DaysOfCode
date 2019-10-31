import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';

export const Layout = ({ children }) => <Container>{children}</Container>;

Layout.propTypes = {
  children: PropTypes.element,
};

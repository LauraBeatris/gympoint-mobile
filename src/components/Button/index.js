import React from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator } from 'react-native';

import { Container, Text } from './styles';

export default function Button({ styles, children, loading, ...rest }) {
  return (
    <Container styles={styles} {...rest}>
      {loading ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <Text> {children} </Text>
      )}
    </Container>
  );
}

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.string]).isRequired,
  loading: PropTypes.bool,
  styles: PropTypes.oneOfType([PropTypes.shape(), PropTypes.array]),
};

Button.defaultProps = {
  loading: false,
  styles: {},
};

import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { Container, StyledInput } from './styles';

function Input({ style, ...rest }, ref) {
  return (
    <Container style={style}>
      <StyledInput ref={ref} {...rest} />
    </Container>
  );
}

Input.propTypes = {
  styles: PropTypes.oneOfType([PropTypes.shape(), PropTypes.array]),
};

Input.defaultProps = {
  styles: {},
};

export default forwardRef(Input);

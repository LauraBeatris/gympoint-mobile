import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import { Container, Number, Date } from './styles';

export default function CheckinItem({ checkinNumber, date }) {
  const number = useMemo(() => parseInt(checkinNumber, 10) + 1, [
    checkinNumber,
  ]);

  return (
    <Container>
      <Number> Check-in #{number} </Number>
      <Date>{date}</Date>
    </Container>
  );
}

CheckinItem.propTypes = {
  checkinNumber: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
};

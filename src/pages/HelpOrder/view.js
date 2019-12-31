import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Alert, Image } from 'react-native';

import Logo from '~/assets/logo-header.jpg';

import {
  Container,
  LogoWrapper,
  HelpOrderItem,
  HelpOrderInformations,
  Type,
  Date,
  HelpOrderQuestion,
  HelpOrderAnswer,
} from './styles';

function HelpOrder({ navigation }) {
  const helpOrder = navigation.getParam('helpOrder');
  return (
    <Container>
      <HelpOrderItem>
        <HelpOrderInformations>
          <Type>PERGUNTA</Type>
          <Date>{helpOrder.formattedDate}</Date>
        </HelpOrderInformations>
        <HelpOrderQuestion>{helpOrder.question}</HelpOrderQuestion>
        {helpOrder.answer ? (
          <>
            <HelpOrderInformations>
              <Type>RESPOSTA</Type>
            </HelpOrderInformations>
            <HelpOrderAnswer>{helpOrder.answer}</HelpOrderAnswer>
          </>
        ) : (
          <HelpOrderInformations>
            <Type> Sem resposta no momento </Type>
          </HelpOrderInformations>
        )}
      </HelpOrderItem>
    </Container>
  );
}

HelpOrder.navigationOptions = {
  headerTitle: () => (
    <LogoWrapper>
      <Image source={Logo} />
    </LogoWrapper>
  ),
};

HelpOrder.propTypes = {
  navigation: PropTypes.shape({ getParam: PropTypes.func }).isRequired,
};

export default HelpOrder;

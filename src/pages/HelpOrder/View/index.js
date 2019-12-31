import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';

import Logo from '~/assets/logo-header.jpg';

import {
  Container,
  LogoWrapper,
  HelpOrderItem,
  HelpOrderInformations,
  InfoType,
  Date,
  Content,
} from './styles';

function HelpOrder({ navigation }) {
  const helpOrder = navigation.getParam('helpOrder');
  return (
    <Container>
      <HelpOrderItem>
        <HelpOrderInformations>
          <InfoType>PERGUNTA</InfoType>
          <Date>{helpOrder.formattedDate}</Date>
        </HelpOrderInformations>
        <Content>{helpOrder.question}</Content>
        <HelpOrderInformations>
          <InfoType>RESPOSTA</InfoType>
        </HelpOrderInformations>
        <Content>
          {helpOrder.answer ? helpOrder.answer : 'Sem resposta até o momento'}
        </Content>
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

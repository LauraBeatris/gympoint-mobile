import React, { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Alert, Image } from 'react-native';

import { Container, LogoWrapper } from '../styles';
import { SubmitButton } from './styles';

import Input from '~/components/Input';
import Logo from '~/assets/logo-header.jpg';

import api from '~/services/api';

export default function New({ navigation }) {
  const studentId = useSelector(state => state.auth.id);
  const orderRef = useRef();

  const [question, setQuestion] = useState('');

  async function sendQuestion() {
    if (!question) {
      return Alert.alert('AVISO', 'Digite seu pedido antes de enviar');
    }

    try {
      const response = await api.post(`students/${studentId}/help-orders`, {
        question,
      });

      Alert.alert('Sucesso', 'Seu pedido de ajuda foi enviado');
      return navigation.navigate('HelpOrder', {
        question: response.data.helpOrder,
      });
    } catch (err) {
      const { contentMessage } = JSON.parse(err.response.data.error.message);

      if (contentMessage) {
        return Alert.alert('Erro', contentMessage);
      }

      return Alert.alert('Erro', 'Não foi possivel realizar um novo pedido');
    }
  }

  return (
    <Container>
      <Input
        multiline
        numberOfLines={15}
        placeholder="Inclua seu pedido de auxílio"
        onChangeText={text => setQuestion(text)}
        returnKeyType="send"
        onSubmitEditing={sendQuestion}
        ref={orderRef}
      />
      <SubmitButton onPress={sendQuestion}>Enviar pedido</SubmitButton>
    </Container>
  );
}

New.navigationOptions = {
  headerTitle: () => (
    <LogoWrapper>
      <Image source={Logo} />
    </LogoWrapper>
  ),
};

New.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func }).isRequired,
};

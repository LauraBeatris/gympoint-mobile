import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { useSelector, useDispatch } from 'react-redux';
import { signInRequest } from '~/store/modules/auth/actions';

import { Container, Form, StyledInput, Image } from './styles';
import Button from '~/components/Button';
import Logo from '~/assets/logo.jpg';

export default function Signin({ navigation }) {
  const loading = useSelector(state => state.auth.loading);
  const dispatch = useDispatch();

  const [studentId, setStudentId] = useState('');

  function handleSubmit() {
    dispatch(signInRequest(studentId));
  }

  return (
    <Container>
      <Image source={Logo} />

      <Form>
        <StyledInput
          secureTextEntry
          returnKeyType="send"
          onSubmitEditing={handleSubmit}
          placeholder="Informe seu ID de cadastro"
          onTextChange
          onChangeText={id => setStudentId(id)}
        />

        <Button loading={loading} onPress={handleSubmit}>
          Another example
        </Button>
      </Form>
    </Container>
  );
}

Signin.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

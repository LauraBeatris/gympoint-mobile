import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { signInRequest } from '~/store/modules/auth/actions';

import { Container, Form, StyledInput, Image } from './styles';
import Button from '~/components/Button';
import Logo from '~/assets/logo.jpg';

export default function Signin() {
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
          Entrar no sistema
        </Button>
      </Form>
    </Container>
  );
}

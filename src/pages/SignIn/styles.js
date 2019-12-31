import { Platform } from 'react-native';
import styled from 'styled-components/native';

import Input from '~/components/Input';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  background: #fff;
  padding: 0 25px;
  flex: 1;
  justify-content: center;
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 20px;
`;

export const Image = styled.Image`
  height: 80;
  align-self: center;
`;

export const StyledInput = styled(Input)`
  margin-bottom: 15px;
`;

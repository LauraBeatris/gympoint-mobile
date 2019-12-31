import styled from 'styled-components/native';
import { BaseButton } from 'react-native-gesture-handler';

export const Container = styled(BaseButton)`
  height: 45px;
  background: #ee4e62;

  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
`;

export const Text = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;

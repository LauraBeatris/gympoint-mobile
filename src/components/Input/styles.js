import styled from 'styled-components/native';

export const Container = styled.View`
  background: #ffff;
  border-radius: 4px;
  flex-direction: row;
`;

export const StyledInput = styled.TextInput.attrs({
  placeholderTextColor: '#999999',
  textAlignVertical: 'top',
})`
  font-size: 16px;
  color: #999999;
  border: 1px solid #dddddd;
  border-radius: 4px;
  padding-left: 15px;
  flex: 1;
`;

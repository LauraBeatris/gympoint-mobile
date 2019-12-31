import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  padding: 30px;
  flex: 1;
  background: #f5f5f5;

  ${props =>
    props.loading &&
    css`
      justify-content: center;
      align-items: center;
    `}
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 25px;
`;

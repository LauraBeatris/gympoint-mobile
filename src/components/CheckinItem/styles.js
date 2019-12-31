import styled from 'styled-components/native';

export const Container = styled.View`
  background: #fff;
  border: 1px solid #dddddd;
  border-radius: 4px;
  margin-bottom: 10px;
  padding: 14px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Number = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #444444;
`;

export const Date = styled.Text`
  font-size: 14px;
  color: #666666;
`;

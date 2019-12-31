import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 30px;
  flex: 1;
  background: #f5f5f5;
`;

export const LogoWrapper = styled.View`
  position: absolute;
  left: 24%;
`;

export const HelpOrderInformations = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0px 10px;
`;

export const HelpOrderItem = styled.View`
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 15px;
  padding: 15px;
  background: #fff;
  border-radius: 4px;
  border: 1px solid #dddddd;
`;

export const InfoType = styled.Text`
  font-size: 14px;
  color: #444444;
  font-weight: bold;
  flex: 1;
`;

export const Date = styled.Text`
  font-size: 14px;
  color: #666666;
`;

export const Content = styled.Text`
  font-size: 14px;
  color: #666666;
  line-height: 25px;
  padding-bottom: 10px;
`;

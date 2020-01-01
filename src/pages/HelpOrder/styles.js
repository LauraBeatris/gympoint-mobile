import styled, { css } from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

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

export const HelpOrderItem = styled(TouchableOpacity)`
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 15px;
  padding: 15px;
  background: #fff;
  border-radius: 4px;
  border: 1px solid #dddddd;
`;

export const HelpOrderInformations = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 18px;
`;

export const IsAnsweredWrapper = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

export const IsAnsweredText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: ${props => (props.answered ? '#42CB59' : '#999999')};
`;

export const IsAnsweredIcon = styled(Icon).attrs({
  name: 'check-circle',
  size: 16,
})`
  margin-right: 8px;
  color: ${props => (props.answered ? '#42CB59' : '#999999')};
`;

export const Date = styled.Text`
  font-size: 14px;
  color: #666666;
`;

export const HelpOrderQuestion = styled.Text`
  font-size: 14px;
  color: #666666;
  line-height: 25px;
`;

export const Type = styled.Text`
  font-size: 14px;
  color: #444444;
  font-weight: bold;
`;

export const LogoWrapper = styled.SafeAreaView`
  position: absolute;
  left: 24%;
`;

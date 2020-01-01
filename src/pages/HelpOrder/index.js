import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { ActivityIndicator, Alert } from 'react-native';
import { withTheme } from 'styled-components';
import { withNavigationFocus } from 'react-navigation';

import api from '~/services/api';
import formatDate from '~/helpers/formatDate';

import {
  Container,
  List,
  HelpOrderItem,
  HelpOrderInformations,
  IsAnsweredWrapper,
  IsAnsweredText,
  IsAnsweredIcon,
  Date,
  HelpOrderQuestion,
} from './styles';
import Button from '~/components/Button';
import Header from '~/components/Header';

function HelpOrder({ theme, isFocused, navigation }) {
  const studentId = useSelector(state => state.auth.id);

  const [helpOrders, setHelpOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    async function getHelpOrders() {
      try {
        setLoading(true);

        const response = await api.get(
          `students/${studentId}/help-orders?page=${page}`
        );

        const data = formatDate(response.data);
        return setHelpOrders(data);
      } catch (err) {
        const { contentMessage } = JSON.parse(err.response.data.error.message);

        if (contentMessage) {
          return Alert.alert('Erro', contentMessage);
        }

        return Alert.alert(
          'Erro',
          'Não foi possivel listar seus pedidos de ajuda. Tente novamente'
        );
      } finally {
        setLoading(false);
      }
    }

    if (isFocused) {
      getHelpOrders();
    }
  }, [isFocused, page, studentId]);

  async function handleNextPage() {
    setPage(page + 1);
    const response = await api.get(
      `students/${studentId}/help-orders?page=${page}`
    );

    const data = formatDate(response.data);
    setHelpOrders(data);
  }

  async function handleRefreshing() {
    setPage(1);
    setRefreshing(true);
    setHelpOrders([]);
    setLoading(true);

    try {
      const response = await api.get(`students/${studentId}/help-orders`);
      const data = formatDate(response.data);
      return setHelpOrders(data);
    } catch (err) {
      const { contentMessage } = JSON.parse(err.response.data.error.message);

      if (contentMessage) {
        return Alert.alert('Erro', contentMessage);
      }

      return Alert.alert(
        'Erro',
        'Não foi possivel atualizar a lista de pedidos de ajuda'
      );
    } finally {
      setRefreshing(false);
      setLoading(false);
    }
  }

  async function createHelpOrder() {
    return navigation.navigate('CreateHelpOrder');
  }

  return (
    <Container loading={loading}>
      {!loading ? (
        <>
          <Button onPress={createHelpOrder}> Novo pedido de auxílio </Button>
          <List
            data={helpOrders}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => (
              <HelpOrderItem
                onPress={() =>
                  navigation.navigate('ViewHelpOrder', { helpOrder: item })
                }
              >
                <HelpOrderInformations>
                  <IsAnsweredWrapper>
                    <IsAnsweredIcon answered={!!item.answer_at} />
                    <IsAnsweredText answered={!!item.answer_at}>
                      {item.answer_at ? 'Respondido' : 'Sem resposta'}
                    </IsAnsweredText>
                  </IsAnsweredWrapper>

                  <Date> {item.formattedDate} </Date>
                </HelpOrderInformations>
                <HelpOrderQuestion numberOfLines={3}>
                  {item.question}
                </HelpOrderQuestion>
              </HelpOrderItem>
            )}
            onEndReached={handleNextPage}
            onEndReachedThreshold={0.1}
            refreshing={refreshing}
            onRefresh={handleRefreshing}
          />
        </>
      ) : (
        <ActivityIndicator size="small" color={theme.primary} />
      )}
    </Container>
  );
}

HelpOrder.propTypes = {
  theme: PropTypes.shape().isRequired,
  isFocused: PropTypes.bool.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    getParam: PropTypes.func,
  }).isRequired,
};

HelpOrder.navigationOptions = ({ navigation }) => ({
  header: <Header navigation={navigation} />,
});

export default withNavigationFocus(withTheme(HelpOrder));

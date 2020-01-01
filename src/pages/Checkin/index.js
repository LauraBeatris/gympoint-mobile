import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Alert, ActivityIndicator } from 'react-native';
import { withTheme } from 'styled-components';
import { pt } from 'date-fns/locale';
import { formatRelative, parseISO } from 'date-fns';

import CheckinItem from '~/components/CheckinItem';
import Button from '~/components/Button';
import Header from '~/components/Header';

import { Container, List } from './styles';

import api from '~/services/api';
import formatDate from '~/helpers/formatDate';

function Checkin({ theme }) {
  const [checkins, setCheckins] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const studentId = useSelector(state => state.auth.id);

  async function getCheckins() {
    try {
      setLoading(true);
      const response = await api.get(
        `students/${studentId}/checkins?page=${page}`
      );

      const data = formatDate(response.data);
      setCheckins(page >= 2 ? [...checkins, ...data] : data);
    } catch (err) {
      Alert.alert('Erro', 'Erro ao listar check-ins, tente novamente');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getCheckins();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleNextPage() {
    if (checkins.length >= 10) {
      setPage(page + 1);
      const response = await api.get(
        `students/${studentId}/checkins?page=${page}`
      );

      const data = formatDate(response.data);
      setCheckins(data);
    }
  }

  async function handleRefreshing() {
    setPage(1);
    setRefreshing(true);
    setCheckins([]);

    try {
      const response = await api.get(`students/${studentId}/checkins`);
      const data = formatDate(response.data);
      return setCheckins(data);
    } catch (err) {
      const { contentMessage } = JSON.parse(err.response.data.error.message);

      if (contentMessage) {
        return Alert.alert('Erro', contentMessage);
      }

      return Alert.alert(
        'Erro',
        'Não foi possivel atualizar a lista de checkins'
      );
    } finally {
      setRefreshing(false);
    }
  }

  async function createCheckIn() {
    try {
      setLoading(true);
      const response = await api.post(`students/${studentId}/checkins`);
      const data = {
        ...response.data,
        formattedDate: formatRelative(
          parseISO(response.data.createdAt),
          new Date(),
          {
            addSuffix: true,
            locale: pt,
          }
        ),
      };
      console.tron.log(checkins);
      return setCheckins([...checkins, data]);
    } catch (err) {
      const { contentMessage } = JSON.parse(err.response.data.error.message);

      if (contentMessage) {
        return Alert.alert('Erro', contentMessage);
      }

      return Alert.alert('Erro', 'Não foi possivel realizar um novo checkin');
    } finally {
      setLoading(false);
    }
  }

  return (
    <Container loading={loading}>
      {!loading ? (
        <>
          <Button onPress={createCheckIn}>Novo check-in</Button>
          <List
            data={checkins}
            keyExtractor={item => String(item.id)}
            renderItem={({ item, index }) => (
              <CheckinItem checkinNumber={index} date={item.formattedDate} />
            )}
            onEndReached={handleNextPage}
            onEndReachedThreshold={0.8}
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

Checkin.navigationOptions = ({ navigation }) => ({
  header: <Header navigation={navigation} />,
});

Checkin.propTypes = {
  theme: PropTypes.shape().isRequired,
};

export default withTheme(Checkin);

import { all, takeLatest, call, put } from 'redux-saga/effects';
import { Alert } from 'react-native';

import { signInSuccess, signInFailure } from './actions';

import api from '~/services/api';

export function* signIn({ payload }) {
  const { id } = payload;

  let student = null;

  // Catching errors while the authentication request and then populating the variables with the response
  try {
    const response = yield call(api.get, `students/${id}`);
    student = response.data;
  } catch (err) {
    Alert.alert(null, 'Erro na autenticação. Verifique seus dados');
    return yield put(signInFailure());
  }

  // Sending the success action with the user data
  return yield put(signInSuccess(student));
  // return history.push('/students');
}

export function signOut() {
  // return history.push('/');
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_OUT', signOut),
]);

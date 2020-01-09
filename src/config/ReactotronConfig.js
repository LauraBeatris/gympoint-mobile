import Reactotron from 'reactotron-react-native';
import reactotronSaga from 'reactotron-redux-saga';
import { reactotronRedux } from 'reactotron-redux';

import AsyncStorage from '@react-native-community/async-storage';

if (__DEV__) {
  const tron = Reactotron.setAsyncStorageHandler(AsyncStorage)
    .configure({})
    .useReactNative()
    .use(reactotronRedux())
    .use(reactotronSaga())
    .connect({ host: '192.168.1.8' });

  console.tron = tron;

  tron.clear();
}

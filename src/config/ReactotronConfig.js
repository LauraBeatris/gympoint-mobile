import Reactotron from 'reactotron-react-native';
import reactotronSaga from 'reactotron-redux-saga';
import { reactotronRedux } from 'reactotron-redux';
import { IP_ADDRESS } from 'react-native-dotenv';

import AsyncStorage from '@react-native-community/async-storage';

if (__DEV__) {
  const tron = Reactotron.setAsyncStorageHandler(AsyncStorage)
    .configure({})
    .useReactNative()
    .use(reactotronRedux())
    .use(reactotronSaga())
    .connect({ host: IP_ADDRESS });

  console.tron = tron;

  tron.clear();
}

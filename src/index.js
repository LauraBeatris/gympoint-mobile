import React, { Component } from 'react';
import CodePush from 'react-native-code-push';
import OneSignal from 'react-native-onesignal';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';

import theme from '~/styles/theme';
import '~/config/ReactotronConfig';
import { store, persistor } from '~/store';
import App from './App';

class Main extends Component {
  constructor(props) {
    super(props);

    OneSignal.init('9b484f3e-ef29-4250-a8e9-211e1ab012e5');
    OneSignal.addEventListener('received', this.onReceived);
    OneSignal.addEventListener('opened', this.onOpened);
    OneSignal.addEventListener('ids', this.onRegistedIds);
  }

  componentWillUnmount() {
    OneSignal.removeEventListener('received');
    OneSignal.removeEventListener('opened');
    OneSignal.removeEventListener('ids');
  }

  // Receiving the notification with the app opened
  onReceived = notification => {
    console.tron.log('It seems that we received a notification', notification);
  };

  // Fires when the notification is opened
  onOpened = openResult => {
    console.tron.log('Give the notification alone', openResult.notification);
    console.tron.log('Thats the message', openResult.notification.payload.body);
    console.tron.log(
      'Additional data',
      openResult.notification.payload.additionalData
    );
    console.tron.log(
      'Are you looking at it?',
      `${
        openResult.notification.isAppInFocus
          ? 'The answer is yes!!'
          : 'Thats sad...'
      }`
    );
  };

  // Fires when the user id is registed in the notification service
  // The user can have more than one id and we can save it in the database to send more notification later
  onRegistedIds = ids => {
    console.tron.log('Welcome!! I see you', ids);
  };

  render() {
    return (
      <>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <ThemeProvider theme={theme}>
              <StatusBar barStyle="dark-content" backgroundColor="#fff" />
              <App />
            </ThemeProvider>
          </PersistGate>
        </Provider>
      </>
    );
  }
}

export default CodePush({
  checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME,
})(Main);

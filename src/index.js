import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import CodePush from 'react-native-code-push';
import OneSignal from 'react-native-onesignal';

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
    OneSignal.addEventListener('ids', this.onIdsRegister);
    OneSignal.inFocusDisplaying(2);
  }

  UNSAFE_componentWillMount() {
    OneSignal.removeEventListener('received');
    OneSignal.removeEventListener('opened');
    OneSignal.removeEventListener('ids');
  }

  onReceived = notificationData => {};

  onIdsRegister = device => {};

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

import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';

import theme from '~/styles/theme';
import '~/config/ReactotronConfig';
import { store, persistor } from '~/store';
import App from './App';

export default function Index() {
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

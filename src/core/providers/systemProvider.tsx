import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from '../redux/store';
import GlobalStyle from '../uiTheme/global';


interface ISystemProvider {
  children: React.ReactNode,
}

const SystemProvider = function({ children }: ISystemProvider) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GlobalStyle />
        {children}
      </PersistGate>
    </Provider>
  );
}

export default SystemProvider;

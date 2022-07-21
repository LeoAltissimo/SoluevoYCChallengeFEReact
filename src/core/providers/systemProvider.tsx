import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import GlobalStyle from '../uiTheme/global';

interface ISystemProvider {
  children: React.ReactNode,
}

const SystemProvider = function({ children }: ISystemProvider) {
  return (
    <Provider store={store}>
      <GlobalStyle />
      {children}
    </Provider>
  );
}

export default SystemProvider;

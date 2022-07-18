import React from 'react';

import {
  MainContainer,
  LimitantContainer,
} from '../uiTheme/global';
import Header from '../containers/header';


interface IPageSkeleton {
  children: React.ReactNode,
}

const PageSkeleton = function({ children }: IPageSkeleton) {
  return (
    <MainContainer>
      <Header />
      <LimitantContainer>
          {children}
      </LimitantContainer>
    </MainContainer>
  );
}

export default PageSkeleton;

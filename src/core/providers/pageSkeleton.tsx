import React from 'react';

import {
  MainContainer,
  LimitantContainer,
} from '../uiTheme/global';
import Header from '../containers/header';

interface IPageSkeleton {
  children: React.ReactNode,
  noFavorites?: boolean,
}

const PageSkeleton = function({ children, noFavorites }: IPageSkeleton) {
  return (
    <MainContainer>
      <Header noFavorites={noFavorites} />
      <LimitantContainer>
          {children}
      </LimitantContainer>
    </MainContainer>
  );
}

export default PageSkeleton;

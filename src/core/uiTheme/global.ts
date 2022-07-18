import styled, { createGlobalStyle } from 'styled-components';

import {
  breakPoints,
  colors,
  spaces,
  borderR,
} from './constants';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Lexend Deca';font-size: 22px;
  }

  body {
    margin: 0;
    padding: 0;
  }
`;

export const MainContainer = styled.div`
  background-color: ${colors};
  min-height: 100vh;
  max-width: 100vw;
  width: 100%;
`;

export const LimitantContainer = styled.div`
  max-width: ${breakPoints.xl}px;
  margin: auto;
  padding: 0 ${spaces.level8}px;
  overflow: hidden;

  @media (max-width: ${breakPoints.sm}px) {
    padding: 0 ${spaces.level3}px;
  }
`;

export const DefaultCard = styled.div`
  border-radius: ${borderR.level2}px;
  box-shadow: 0px 0px 6px ${colors.shadow};
  padding: ${spaces.level4}px;
  background-color: ${colors.contrast};

  
  @media (max-width: ${breakPoints.sm}px) {
    border-radius: ${borderR.level1}px;
    padding: ${spaces.level2}px;
  }
`;
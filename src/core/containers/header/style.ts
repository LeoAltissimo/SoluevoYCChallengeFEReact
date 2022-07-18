import styled from 'styled-components';
import { LimitantContainer } from '../../uiTheme/global';
import { spaces, breakPoints } from '../../uiTheme/constants';
import IconButton from '../../uiTheme/IconButtom';

export const Container = styled(LimitantContainer)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-top: ${spaces.level7}px;
  padding-bottom: ${spaces.level7}px;

  @media (max-width: ${breakPoints.sm}px) {
    padding-top: ${spaces.level6}px;
    padding-bottom: ${spaces.level6}px;
  }
`;

export const LogoImage = styled.img.attrs({
  src: '/logo.svg',
  alt: 'Logo Brutus Trucks'
})`
  cursor: pointer;
`;

export const FavoriteButton = styled(IconButton).attrs({
  icon: '/icons/heart-icon.svg',
  text: 'Favoritos',
})`

`
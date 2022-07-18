import styled from 'styled-components';
import { DefaultCard } from '@core/uiTheme/global';
import {
  colors,
  textSizes,
  spaces,
  breakPoints,
} from '@core/uiTheme/constants';
import IconButton from '@core/uiTheme/IconButtom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: ${spaces.level6}px 0; 
`;

export const Card = styled(DefaultCard)`
  position: relative;
  height: 300px;
  
  @media (max-width: ${breakPoints.xl}px) {
    height: 200px;
  }
`;

interface ICoverImage {
  bkImg: string
}

export const CoverImage = styled.div<ICoverImage>`
  background-image: ${({ bkImg }) => `url('${bkImg}')`};
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  
  height: 100%;
  width: 100%;
`;

export const FavoriteButton = styled(IconButton).attrs({
  icon: '/icons/heart-icon.svg',
  activeIcon: '/icons/heart-icon-full.svg',
})`
  position: absolute;
  top: ${spaces.level1}px;
  right: ${spaces.level1}px;
`;

export const Title = styled.h4`
  font-size: ${textSizes.level2}px;
  color: ${colors.second};
`;

export const LineContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Label = styled.span`
  font-size: ${textSizes.level1}px;
  color: ${colors.second};
  margin-right: ${spaces.level1}px;
`;

export const OldPrice = styled.span`
  font-size: ${textSizes.level1}px;
  color: ${colors.favorite};
  text-decoration-line: line-through;
`;

export const Price = styled.h4`
  margin-top: 0;
  font-size: ${textSizes.level3}px;
  color: ${colors.primary};
  font-weight: bold;
`;

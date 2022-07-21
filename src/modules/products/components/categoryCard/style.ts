import styled from 'styled-components';
import {
  spaces,
  textSizes,
  colors,
  breakPoints,
} from '@UiTheme/constants';
import { DefaultCard } from '@UiTheme/global';

export const Container = styled.div`
  padding-right: ${spaces.level1}px;
  padding-top: ${spaces.level8}px;
  position: relative;
  min-width: 330px;

  @media (max-width: ${breakPoints.md}px) {
    padding-top: ${spaces.level7}px;
  }
`;

export const Card = styled(DefaultCard)`
  display: flex;
  align-items: center;
  height: 140px; 
`;

export const Title = styled.h3`
  font-weight: 700;
  font-size: ${textSizes.level7}px;
  color: ${colors.primary};
  width: 45%;
  margin: 0;
`;

interface IImage {
  bkImg: string
}

export const Image = styled.span<IImage>`
  background-image: ${({ bkImg }) => `url('${bkImg}')`};
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;

  height: 85%;
  width: 45%;
  position: absolute;
  bottom: 6px;
  right: 6px;
`;


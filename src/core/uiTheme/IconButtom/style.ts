import styled from 'styled-components';
import {
  colors,
  textSizes,
  spaces,
  breakPoints,
} from '../constants';

export const Button = styled.button`
  display: flex;
  outline: none;
  border: 0;
  background-color: transparent;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 0.1s;

  :active {
    transform: scale(1.1);
  }
`;

export const Icon = styled.img.attrs({
  alt: 'Icone do botão'
})`
  width: 22px;
  height: 22px;
`;

export const Text = styled.span`
  color: ${colors.primary};
  font-size: ${textSizes.level4}px;
  margin-left: ${spaces.level2}px;

  @media (max-width: ${breakPoints.md}px) {
    display: none;
  }
`;
import styled from 'styled-components';
import { motion } from 'framer-motion';
import {
  borderR,
  colors,
  textSizes,
  breakPoints,
} from '@UiTheme/constants';

const containerAmin = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {delay: 0.1, duration: 0.7 }
  }
}

const shadowAmin = {
  hidden: { scale: 3 },
  show: {
    scale: 1,
    transition: {delay: 0.8, duration: 0.7 }
  }
}

const textAnim = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {delay: 1, duration: 1 }
  }
}

interface IContainer {
  bkImage: string
}

export const Container = styled(motion.div).attrs({
  variants: containerAmin,
  initial: "hidden",
  animate: "show",
})<IContainer>`
  background-image: ${({ bkImage }) => `url('${bkImage}')`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 500px;
  width: 100%;
  border-radius: ${borderR.level3}px;
  position: relative;
  overflow: hidden;
  
  @media (max-width: ${breakPoints.md}px) {
    height: 300px;
  }
`;

export const ShadowOverLay = styled(motion.span).attrs({
  variants: shadowAmin,
  initial: "hidden",
  animate: "show",
})`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: radial-gradient(
    77.91% 77.91% at 26.22% 122.67%, 
    ${colors.primary} 0%, 
    rgba(0, 0, 0, 0) 100%
  );
`;

interface IText {
  textColor?: string
}

export const Text = styled(motion.h1).attrs({
  variants: textAnim,
  initial: "hidden",
  animate: "show",
})<IText>`
  position: absolute;
  top: 50%; 
  left: 24px;
  width: 60%;

  font-style: normal;
  font-weight: 900;
  font-size: ${textSizes.level8}px;
  line-height: 94px;
  letter-spacing: 0.025em;

  color: ${({ textColor }) => textColor || colors.contrast};

  @media (max-width: ${breakPoints.xl}px) {
    top: 60%;
    width: 80%;
    font-size: ${textSizes.level6}px;
    line-height: 44px;
  }
`
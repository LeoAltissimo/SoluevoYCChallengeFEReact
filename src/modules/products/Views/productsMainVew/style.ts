import styled from 'styled-components';
import { motion } from 'framer-motion';
import { spaces, breakPoints, textSizes, colors } from '@core/uiTheme/constants';

const categoryAmin = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {delay: 0.6, duration: 0.7 }
  }
}

const productAmin = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {delay: 0.8, duration: 0.7 }
  }
}

export const CategoryContainer = styled(motion.div).attrs({
  variants: categoryAmin,
  initial: "hidden",
  animate: "show",
})`
  display: grid; 
  grid-auto-columns: 1fr; 
  grid-auto-rows: 1fr; 
  grid-template-columns: 1fr 1fr 1fr 1fr; 
  gap: 0px ${spaces.level1}px; 
  width: 100%;
  padding-bottom: ${spaces.level4}px;
  margin-bottom: ${spaces.level4}px;

  @media (max-width: ${breakPoints.md}px) {
    overflow-x: scroll;
    margin-left: -${spaces.level3}px;
    padding-left: ${spaces.level3}px;
    width: calc(100vw - 64px);
  }
  @media (max-width: ${breakPoints.sm}px) {
    width: 100vw;
  }
`;

export const SectionTitle = styled(motion.h2).attrs({
  variants: productAmin,
  initial: "hidden",
  animate: "show",
})`
  font-weight: 700;
  font-size: ${textSizes.level7}px;
  color: ${colors.primary};
  width: 45%;
  margin-top: ${spaces.level8}px;
  margin-bottom: 0;
`;

export const ProductsContainer = styled(motion.div).attrs({
  variants: productAmin,
  initial: "hidden",
  animate: "show",
})`
  display: grid; 
  grid-auto-columns: 1fr; 
  grid-auto-rows: 1fr; 
  grid-template-columns: 1fr 1fr 1fr 1fr; 
  gap: 0px ${spaces.level7}px; 
  width: 100%;
  margin-bottom: ${spaces.level7}px;

  @media (max-width: ${breakPoints.md}px) {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 0px ${spaces.level4}px; 
  }

  @media (max-width: ${breakPoints.sm}px) {
    grid-template-columns: 1fr 1fr;
    gap: 0px ${spaces.level4}px; 
  }
`;

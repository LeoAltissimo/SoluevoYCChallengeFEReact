import React from 'react';
import {
  Container,
  ShadowOverLay,
  Text,
} from './style';

interface IHighlightCard {
  text: string
  textColor?: string
  image: string
  needShadow?: boolean
  action?: () => null
}

const HighlightCard = function({
  text,
  textColor,
  image,
  needShadow,
  action,
}: IHighlightCard) {
  return (
    <Container bkImage={image} onClick={action}>
      {needShadow && <ShadowOverLay />}
      <Text textColor={textColor}>
        {text}
      </Text>
    </Container>
  )
};

export default HighlightCard;

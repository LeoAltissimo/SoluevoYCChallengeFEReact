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
  neeShadow?: boolean
  action?: () => null
}

const HighlightCard = function({
  text,
  textColor,
  image,
  neeShadow,
  action,
}: IHighlightCard) {
  return (
    <Container bkImage={image} onClick={action}>
      {neeShadow && <ShadowOverLay />}
      <Text textColor={textColor}>
        {text}
      </Text>
    </Container>
  )
};

export default HighlightCard;

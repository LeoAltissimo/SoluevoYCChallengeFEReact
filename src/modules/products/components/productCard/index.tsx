import React from 'react';
import { convertNumerToCurrency } from '@core/utils/converter';

import {
  Container,
  CoverImage,
  FavoriteButton,
  Card,
  Title,
  LineContainer,
  Label,
  OldPrice,
  Price,
} from './style';

const strings = {
  originalVelueLavel: "de"
}

interface IProductCard {
  title: string
  image: string
  originalPrice?: number
  finalPrice: number
  isFavorited: boolean
  favoriteAction: () => null
}

const ProductCard = function({
  title,
  image,
  originalPrice,
  finalPrice,
  isFavorited,
  favoriteAction,
}: IProductCard) {
  return (
    <Container>
      <Card>
        <CoverImage bkImg={image} />
        <FavoriteButton action={favoriteAction} active={isFavorited} />
      </Card>

      <Title>{title}</Title>
      {originalPrice && (
        <LineContainer>
          <Label>{strings.originalVelueLavel}</Label>
          <OldPrice>{convertNumerToCurrency(originalPrice)}</OldPrice>
        </LineContainer>
      )}
      <Price>{convertNumerToCurrency(finalPrice)}</Price>
    </Container>
  );
}

export default ProductCard;

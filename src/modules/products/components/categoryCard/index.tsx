import React from 'react';
import {
  Container,
  Card,
  Title,
  Image,
} from './style';

interface ICategory {
  title: string
  image: string
  action?: () => null
}

const CardCategory = function({
  title,
  image,
  action,
}: ICategory) {
  return (
    <Container onClick={action}>
      <Card><Title>{title}</Title></Card>
      <Image bkImg={image}/>
    </Container>
  );
};

export default CardCategory;

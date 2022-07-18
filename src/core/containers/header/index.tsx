import React from 'react';
import { Container, LogoImage, FavoriteButton } from './style';

const Header = function() {
  return (
    <Container>
      <LogoImage />
      <FavoriteButton action={() => null} />
    </Container>
  );
};

export default Header;
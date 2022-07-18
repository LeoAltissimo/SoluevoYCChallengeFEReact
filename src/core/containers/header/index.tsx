import React from 'react';
import { useRouter } from 'next/router'
import { Container, LogoImage, FavoriteButton } from './style';

const Header = function() {
  const router = useRouter();

  return (
    <Container>
      <LogoImage onClick={() => router.push('/')}/>
        <FavoriteButton action={() => router.push('/favoritos')} />
    </Container>
  );
};

export default Header;
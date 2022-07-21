import React from 'react';
import { useRouter } from 'next/router'
import { Container, LogoImage, FavoriteButton } from './style';

interface IPageSkeleton {
  noFavorites?: boolean,
}

const Header = function({ noFavorites }: IPageSkeleton) {
  const router = useRouter();

  return (
    <Container>
      <LogoImage onClick={() => router.push('/')}/>
      {!noFavorites && (
        <FavoriteButton action={() => router.push('/favoritos')} />
      )}
    </Container>
  );
};

export default Header;
import ProductCard from "@modules/products/components/productCard";
import ProductsFavoritesViewModel from "@modules/products/ViewModel/productsFavoritesViewModel";
import React from "react";

import {
  ProductsContainer,
  SectionTitle,
  EmptyListMessage,
} from "./style";

const strings = {
  mostvisited: 'Favoritos',
  empyList: 'Nehum Favorito adicionado',
};

const ProductsMainView = function () {
  const { productsList, handleFavoriteAction } = ProductsFavoritesViewModel();

  return (
    <>
      <SectionTitle>{strings.mostvisited}</SectionTitle>

      {productsList.length === 0 && (
        <EmptyListMessage>{strings.empyList}</EmptyListMessage>
      )}

      <ProductsContainer>
        {productsList.map((productItem) => (
          <ProductCard
            key={productItem.id}
            title={productItem.name || ""}
            image={productItem.imageURL || ""}
            originalPrice={productItem.listPrice}
            finalPrice={productItem.salePrice || 0}
            isFavorited={productItem.favorite}
            favoriteAction={() => handleFavoriteAction(productItem)}
          />
        ))}
      </ProductsContainer>
    </>
  );
};

export default ProductsMainView;

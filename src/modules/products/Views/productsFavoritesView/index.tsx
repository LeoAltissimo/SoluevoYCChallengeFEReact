import ProductCard from "@modules/products/components/productCard";
import ProductsFavoritesViewModel from "@modules/products/ViewModel/productsFavoritesViewModel";
import React from "react";

import {
  ProductsContainer,
  SectionTitle,
} from "./style";

const strings = {
  mostvisited: 'Favoritos',
};

const ProductsMainView = function () {
  const { productsList, handleFavoriteAction } = ProductsFavoritesViewModel();

  return (
    <>
      <SectionTitle>{strings.mostvisited}</SectionTitle>
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

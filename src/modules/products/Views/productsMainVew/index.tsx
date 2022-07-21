import Category from "@core/entities/category";
import Highlight from "@core/entities/highlight";
import Product from "@core/entities/product";
import CardCategory from "@modules/products/components/categoryCard";
import ProductCard from "@modules/products/components/productCard";
import ProductsMainViewModel from "@modules/products/ViewModel/productsMainViewModel";
import React from "react";
import HighlightCard from "../../components/highlightCard";

import {
  CategoryContainer,
  ProductsContainer,
  SectionTitle,
} from "./style";

const strings = {
  mostvisited: 'Mais Procurados',
};

interface IProductsMainView {
  productList: Array<Product>
  categoryList: Array<Category>
  highlight: Highlight
}

const ProductsMainView = function ({
  productList,
  categoryList,
  highlight,
}: IProductsMainView) {
  const {
    productsList,
    handleFavoriteAction,
  } = ProductsMainViewModel(productList);

  return (
    <>
      <HighlightCard
        image={highlight.image ?? ''}
        text={highlight.text ?? ''}
        needShadow={highlight.needShadow}
      />

      <CategoryContainer>
        {categoryList.map((category) => (
          <CardCategory
            key={category.title}
            title={category.title ?? ''}
            image={category.image ?? ''}
          />
        ))}
      </CategoryContainer>

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

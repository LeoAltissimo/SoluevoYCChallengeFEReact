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
}

const ProductsMainView = function ({ productList }: IProductsMainView) {
  const { productsList, handleFavoriteAction } = ProductsMainViewModel(productList);

  return (
    <>
      <HighlightCard
        image="https://savecoinfiles.nyc3.cdn.digitaloceanspaces.com/misc/soluevo/highlight1.jpg"
        text="SUA AVENTURA OFF-ROAD COMEÇA AQUI!"
        neeShadow
      />

      <CategoryContainer>
        <CardCategory
          title="Rodas e Pneus"
          image="https://savecoinfiles.nyc3.cdn.digitaloceanspaces.com/misc/soluevo/category1.png"
        />
        <CardCategory
          title="Farois e luzes"
          image="https://savecoinfiles.nyc3.cdn.digitaloceanspaces.com/misc/soluevo/category2.png"
        />
        <CardCategory
          title="Opcionais"
          image="https://savecoinfiles.nyc3.cdn.digitaloceanspaces.com/misc/soluevo/category3.png"
        />
        <CardCategory
          title="Campers"
          image="https://savecoinfiles.nyc3.cdn.digitaloceanspaces.com/misc/soluevo/category4.png"
        />
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

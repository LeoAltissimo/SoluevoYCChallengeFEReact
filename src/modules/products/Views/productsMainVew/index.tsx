import CardCategory from "@modules/products/components/categoryCard";
import ProductCard from "@modules/products/components/productCard";
import React from "react";
import HighlightCard from "../../components/highlightCard";

import { CategoryContainer, ProductsContainer } from "./style";

const ProductsMainView = function () {
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

      <ProductsContainer>
        <ProductCard
          title="Falois de LED Hilux"
          image="https://savecoinfiles.nyc3.cdn.digitaloceanspaces.com/misc/soluevo/category2.png"
          finalPrice={1499.0}
          isFavorited
          favoriteAction={() => null}
        />
        <ProductCard
          title="Falois de LED Hilux"
          image="https://savecoinfiles.nyc3.cdn.digitaloceanspaces.com/misc/soluevo/category2.png"
          originalPrice={2499.0}
          finalPrice={1499.0}
          isFavorited
          favoriteAction={() => null}
        />
        <ProductCard
          title="Falois de LED Hilux"
          image="https://savecoinfiles.nyc3.cdn.digitaloceanspaces.com/misc/soluevo/category2.png"
          finalPrice={1499.0}
          isFavorited
          favoriteAction={() => null}
        />
        <ProductCard
          title="Falois de LED Hilux"
          image="https://savecoinfiles.nyc3.cdn.digitaloceanspaces.com/misc/soluevo/category2.png"
          originalPrice={2499.0}
          finalPrice={1499.0}
          isFavorited
          favoriteAction={() => null}
        />
        <ProductCard
          title="Falois de LED Hilux"
          image="https://savecoinfiles.nyc3.cdn.digitaloceanspaces.com/misc/soluevo/category2.png"
          finalPrice={1499.0}
          isFavorited
          favoriteAction={() => null}
        />
        <ProductCard
          title="Falois de LED Hilux"
          image="https://savecoinfiles.nyc3.cdn.digitaloceanspaces.com/misc/soluevo/category2.png"
          originalPrice={2499.0}
          finalPrice={1499.0}
          isFavorited
          favoriteAction={() => null}
        />
        <ProductCard
          title="Falois de LED Hilux"
          image="https://savecoinfiles.nyc3.cdn.digitaloceanspaces.com/misc/soluevo/category2.png"
          originalPrice={2499.0}
          finalPrice={1499.0}
          isFavorited
          favoriteAction={() => null}
        />
      </ProductsContainer>
    </>
  );
};

export default ProductsMainView;

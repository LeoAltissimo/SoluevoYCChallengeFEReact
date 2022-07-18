import CardCategory from "@modules/products/components/categoryCard";
import ProductCard from "@modules/products/components/productCard";
import React from "react";
import HighlightCard from "../../components/highlightCard";

import {
  CategoryContainer,
  ProductsContainer,
  SectionTitle,
} from "./style";

const strings = {
  mostvisited: 'Mais Procurados',
}

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

      <SectionTitle>{strings.mostvisited}</SectionTitle>
      <ProductsContainer>
        <ProductCard
          title="Farois de LED Hilux"
          image="https://savecoinfiles.nyc3.cdn.digitaloceanspaces.com/misc/soluevo/category2.png"
          finalPrice={1499.0}
          isFavorited
          favoriteAction={() => null}
        />
        <ProductCard
          title="Farois de LED Hilux"
          image="https://savecoinfiles.nyc3.cdn.digitaloceanspaces.com/misc/soluevo/products/produto%20%283%29.png"
          originalPrice={2499.0}
          finalPrice={1499.0}
          isFavorited
          favoriteAction={() => null}
        />
        <ProductCard
          title="Farois de LED Hilux"
          image="https://savecoinfiles.nyc3.cdn.digitaloceanspaces.com/misc/soluevo/products/produto%20%284%29.png"
          finalPrice={1499.0}
          isFavorited
          favoriteAction={() => null}
        />
        <ProductCard
          title="Farois de LED Hilux"
          image="https://savecoinfiles.nyc3.cdn.digitaloceanspaces.com/misc/soluevo/products/produto%20%285%29.png"
          originalPrice={2499.0}
          finalPrice={1499.0}
          isFavorited
          favoriteAction={() => null}
        />
        <ProductCard
          title="Farois de LED Hilux"
          image="https://savecoinfiles.nyc3.cdn.digitaloceanspaces.com/misc/soluevo/products/produto%20%286%29.png"
          finalPrice={1499.0}
          isFavorited={false}
          favoriteAction={() => null}
        />
        <ProductCard
          title="Farois de LED Hilux"
          image="https://savecoinfiles.nyc3.cdn.digitaloceanspaces.com/misc/soluevo/products/produto%20%287%29.png"
          originalPrice={2499.0}
          finalPrice={1499.0}
          isFavorited={false}
          favoriteAction={() => null}
        />
        <ProductCard
          title="Farois de LED Hilux"
          image="https://savecoinfiles.nyc3.cdn.digitaloceanspaces.com/misc/soluevo/category2.png"
          originalPrice={2499.0}
          finalPrice={1499.0}
          isFavorited={false}
          favoriteAction={() => null}
        />
      </ProductsContainer>
    </>
  );
};

export default ProductsMainView;

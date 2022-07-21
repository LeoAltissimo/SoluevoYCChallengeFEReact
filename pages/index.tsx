import type { NextPage } from 'next'
import Head from 'next/head'

import SystemProvider from '@core/providers/systemProvider';
import PageSkeleton from '@core/providers/pageSkeleton';
import ProductsMainView from '@modules/products/Views/productsMainVew';

import devData from '@core/utils/devData.json';
import categoriesDevData from '@core/utils/categoriesDevData.json';
import highlightDevData from '@core/utils/highlightDevData.json';

import Product, { IProduct } from '@core/entities/product';
import Category, { ICategory } from '@core/entities/category';
import Highlight, { IHighlight } from '@core/entities/highlight'

interface IStaticData {
  productList: Array<IProduct>
  categories: Array<ICategory>
  highlight: IHighlight,
}

export async function getStaticProps() {
  return {
    props: {
      productList: devData,
      categories: categoriesDevData,
      highlight: highlightDevData,
    },
    revalidate: 30,
  };
}

const Home: NextPage<IStaticData> = (props) => {
  const { productList, categories, highlight } = props;

  const productListFormat = new Product(null)
    .factoryList(productList as Array<IProduct>);
  const categoryListFormat = new Category(null)
    .factoryList(categories as Array<ICategory>);
  const highlightFormat = new Highlight(highlight);

  return (
    <>
      <Head>
        <title>Brutus | A casa do off-road!</title>
      </Head>

      <SystemProvider>
        <PageSkeleton>
          <ProductsMainView
            productList={productListFormat}
            categoryList={categoryListFormat}
            highlight={highlightFormat}
          />
        </PageSkeleton>
      </SystemProvider>
    </>
  )
}

export default Home

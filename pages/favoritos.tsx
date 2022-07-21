import type { NextPage } from 'next'
import Head from 'next/head'

import SystemProvider from '@core/providers/systemProvider';
import PageSkeleton from '@core/providers/pageSkeleton';
import ProductFavoriteView from '@modules/products/Views/productsFavoritesView';

import devData from '@core/utils/devData.json';
import Product, { IProduct } from '@core/entities/product';

interface IStaticData {
  productList: Array<IProduct>
}

export async function getStaticProps() {
  return {
    props: {
      productList: devData,
    },
    revalidate: 30,
  };
}

const Home: NextPage<IStaticData> = ({ productList }) => {
  const productListFormat = new Product(null)
    .factoryList(productList as Array<IProduct>);

  return (
    <>
      <Head>
        <title>Brutus | Lista de favoritos</title>
      </Head>

      <SystemProvider>
        <PageSkeleton noFavorites>
          <ProductFavoriteView />
        </PageSkeleton>
      </SystemProvider>
    </>
  )
}

export default Home

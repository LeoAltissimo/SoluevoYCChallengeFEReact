import type { NextPage } from 'next'
import Head from 'next/head'

import SystemProvider from '@core/providers/systemProvider';
import PageSkeleton from '@core/providers/pageSkeleton';
import ProductsMainView from '@modules/products/Views/productsMainVew';

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
        <title>Brutus | A casa do off-road!</title>
      </Head>

      <SystemProvider>
        <PageSkeleton>
          <ProductsMainView productList={productListFormat} />
        </PageSkeleton>
      </SystemProvider>
    </>
  )
}

export default Home

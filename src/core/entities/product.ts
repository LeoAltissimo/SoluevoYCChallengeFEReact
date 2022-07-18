interface IProduct {
  id?: string,
  name?: string,
  imageURL?: string,
  listPrice?: number,
  salePrice?: number,
  favorite?: boolean,
}

class Product {
  id: string | null;
  name: string | null;
  imageURL: string | null;
  listPrice: number | null;
  salePrice: number | null;
  favorite: boolean;

  constructor(product: IProduct | null) {
    this.id = product?.id ?? null;
    this.name = product?.name ?? "";
    this.imageURL = product?.imageURL ?? "";
    this.listPrice = product?.listPrice ?? null;
    this.salePrice = product?.salePrice ?? 0;
    this.favorite = product?.favorite ?? false;
  }

  factoryList(listToConvert: Array<IProduct>): Array<Product> {
    const productList: Array<Product> = [];

    listToConvert.forEach((product: IProduct) => {
      productList.push(new Product(product));
    });

    return productList;
  }
}

export type { IProduct };
export default Product;

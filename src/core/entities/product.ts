interface IProduct {
  id?: string,
  name?: string,
  imageURL?: string,
  listPrice?: number,
  salePrice?: number,
  favorite?: boolean,
}

class Product {
  id: string | undefined;
  name: string | undefined;
  imageURL: string | undefined;
  listPrice: number | undefined;
  salePrice: number | undefined;
  favorite: boolean = false;

  _contructor(product: IProduct) {
    this.id = product.id;
    this.name = product.name;
    this.imageURL = product.imageURL;
    this.listPrice = product.listPrice;
    this.salePrice = product.salePrice;
    this.favorite = product.favorite || false;
  }
}

export type { IProduct };
export default Product;

interface ICategory {
  title?: string,
  image?: string,
  destination?: string,
}

class Category {
  title: string | null;
  image: string | null;
  destination: string | null;

  constructor(product: ICategory | null) {
    this.title = product?.title ?? "";
    this.image = product?.image ?? "";
    this.destination = product?.destination ?? "/";
  }

  factoryList(listToConvert: Array<ICategory>): Array<Category> {
    const productList: Array<Category> = [];

    listToConvert.forEach((category: ICategory) => {
      productList.push(new Category(category));
    });

    return productList;
  }
}

export type { ICategory };
export default Category;

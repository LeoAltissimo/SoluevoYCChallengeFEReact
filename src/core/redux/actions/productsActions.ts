import Product from "@core/entities/product";

const findInProductList = (product: Product, list: Array<Product>) => {
  for (let i = 0; i < list.length; i++) {
    if (list[i].id === product.id) {
      return i;
    }
  }

  return -1;
}

export const updateProductList = (newList: Array<Product>) => ({
  type: "PRODUCTS_UPDATE_LIST",
  payload: newList,
});

export const removeFavorite = (pToRemove: Product, list: Array<Product>) => {
  let productIndex = findInProductList(pToRemove, list);

  if (productIndex !== -1) {
    list[productIndex].favorite = false;
    return ({
      type: "PRODUCTS_UPDATE_LIST",
      payload: list,
    });
  }

  return ({ type: null });
}

export const addFavorite = (pToAdd: Product, list: Array<Product>) => {
  let productIndex = findInProductList(pToAdd, list);

  if (productIndex !== -1) {
    list[productIndex].favorite = true;
    return ({
      type: "PRODUCTS_UPDATE_LIST",
      payload: list,
    });
  }

  return ({ type: null });
}
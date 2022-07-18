import Product from "@core/entities/product";
import { Dispatch } from "redux";

export const updateProductList = (newList: Array<Product>) => ({
  type: "PRODUCTS_UPDATE_LIST",
  paylod: newList,
}) ;

export const removeFavorite = (pToRemove: Product, list: Array<Product>) => {
  for (let i = 0; i < list.length; i++) {
    if (list[i].id === pToRemove.id) {
      return (dispatch: Dispatch) => dispatch(updateProductList(list.splice(i, 1)));
    }
  }
}

export const addFavorite = (pToAdd: Product, list: Array<Product>) => {
  for (let i = 0; i < list.length; i++) {
    if (list[i].id === pToAdd.id) {
      return;
    }
  }
  list.push(pToAdd);
  return (dispatch: Dispatch) => dispatch(updateProductList(list));
}
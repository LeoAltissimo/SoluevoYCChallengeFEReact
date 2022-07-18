import Product from '@core/entities/product';
import { IAction } from '../store';

export interface IproductReducer {
  productsList: Array<Product>
}

const initialState = {
  productsList: []
};

const productsReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case 'PRODUCTS_UPDATE_LIST':
      return {
        ...state,
        productsList: action.payload,
      };
    default: return state;
  }
};

export default productsReducer;

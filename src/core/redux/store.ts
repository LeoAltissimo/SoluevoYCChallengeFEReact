import "regenerator-runtime/runtime";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import products, { IproductReducer } from './reducers/productsReducer';

interface IAction {
  type: String
  payload: any
};

interface IStore {
  products: IproductReducer
}

export type { IAction, IStore };
export default createStore(
    combineReducers({
      products,
    }),
    applyMiddleware(thunk, logger)
  );

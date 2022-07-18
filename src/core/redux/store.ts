import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import products, { IproductReducer } from './reducers/productsReducer';

interface IAction {
  type: String
  payload: any
};

interface IStore {
  products: IproductReducer
}

const persistConfig = {
    key: 'products',
    storage: storage,
    whitelist: ['products']
 };
const presistedReducer = persistReducer(persistConfig, products );
const store = createStore(presistedReducer, 
composeWithDevTools(applyMiddleware(thunk, logger)));
const persistor = persistStore(store);
export { persistor, store };
export type { IAction, IStore };

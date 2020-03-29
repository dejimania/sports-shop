import { createStore } from 'redux';
import { ShopReducer } from './ShopReducer';

export const SportShopDataStore = createStore(ShopReducer);
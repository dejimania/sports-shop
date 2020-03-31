import { createStore } from 'redux';
import { ShopReducer } from './ShopReducer';

export const SportsShopDataStore = createStore(ShopReducer);
import { combineReducers } from 'redux';
import { customerReducer } from './customer';
import { productsReducer } from './products';

export default combineReducers({
    products: productsReducer,
    customer: customerReducer
});
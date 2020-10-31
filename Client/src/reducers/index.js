import { combineReducers } from 'redux';
import productReducer from './productReducer';
import categoryReducer from './categoryReducer';
import contactReducer from './contactReducer';

export default combineReducers({
    products: productReducer,
    categories: categoryReducer,
    contact: contactReducer
});
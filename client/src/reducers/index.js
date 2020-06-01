import { combineReducers } from 'redux';
import cart from './cart';
import totalCart from './totalCart';

export default combineReducers({
    cart,
    totalCart
});
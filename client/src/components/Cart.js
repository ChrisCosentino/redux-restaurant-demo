import React, { Fragment } from 'react';

import { connect } from 'react-redux';
import { removeFromCart } from '../actions/cart';

import CartItem from './CartItem';

const Cart = ({ cart, totalCart }) => {

    return (
        <div className="cart-container">
           <h1>Cart</h1>
           {cart.map(cartItem => (
               <div>
                   <CartItem cartItem={cartItem.item} key={cartItem.item.uid} />
               </div>
           ))}
            <div className="total">
                <div>Total:</div>
                <div>${totalCart.total}</div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    cart: state.cart,
    totalCart: state.totalCart
})

export default connect(
    mapStateToProps,
    { removeFromCart }
)(Cart);
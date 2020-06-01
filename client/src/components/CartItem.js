import React from 'react'

import { removeFromCart } from '../actions/cart';
import { connect } from 'react-redux';


const CartItem = ({ cartItem, removeFromCart }) => {
    
    const handleRemoveClick = () => {
        removeFromCart(cartItem);
    }

    return (
        <div className="cart-item-container">
            <div className="cart-first">
                <span className="cart-item-name">{cartItem.name}</span>
                <button className="remove-btn" onClick={handleRemoveClick}>X</button>
            </div>
            <div className="cart-sec">
                <span className="cart-item-price">Price: ${cartItem.price}</span>
                <span className="cart-item-qty">Qty: {cartItem.qty}</span>
            </div>
        </div>
    )
}

export default connect(
    null,
    { removeFromCart }
)(CartItem);

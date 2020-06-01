import React, { Fragment } from 'react';

import { connect } from 'react-redux';
import { addToCart } from '../actions/cart';

const MenuItem = ({ addToCart, item }) => {

    const handleAddToCart = () => {
        
        addToCart(item)
    }

    return (
        // <table border="1">
        //     <thead>
        //         <tr>
        //             <th>Name</th>
        //             <th>price</th>
        //             <th>cat</th>
        //             <th>qty</th>
        //         </tr>
        //     </thead>
        //     <tbody>
        //         <tr onClick={handleAddToCart}>
        //             <td>{item.name}</td>
        //             <td>{item.price}</td>
        //             <td>{item.category}</td>
        //             <td>{item.qty}</td>
        //         </tr>
        //     </tbody>
        // </table>
        <Fragment>
            <div className="menu-item">
                <div className="menu-item-specs">
                    <h3 className="menu-item-name">{item.name}</h3>
                    <span className="menu-dots"></span>
                    <h3 className="menu-item-price"><span>$</span>{item.price}</h3>
                </div>
                <p className="menu-item-desc">This is a demo item</p>
                <button onClick={handleAddToCart} className="menu-item-order button">Add to cart</button>
            </div>
        </Fragment>



        
    )
}

export default connect(
    null,
    { addToCart }
)(MenuItem);
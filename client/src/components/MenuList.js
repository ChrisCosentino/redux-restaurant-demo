import React, { useEffect } from 'react';
import uuid from 'react-uuid';

import MenuItem from './MenuItem';

const MenuList = () => {

    const menu = {
        items: [
            {
                "name": "Coke",
                "price": 3,
                "category": "drink",
                "qty": 1, 
                "uid": uuid()
            },
            {
                "name": "Hamburger",
                "price": 12,
                "category": "dinner",
                "qty": 1,
                "uid": uuid()
            },
            {
                "name": "Ice tea",
                "price": 3,
                "category": "drink",
                "qty": 1, 
                "uid": uuid()
            },
            {
                "name": "Hot Dog",
                "price": 8,
                "category": "dinner",
                "qty": 1,
                "uid": uuid()
            },
            {
                "name": "Fries",
                "price": 6,
                "category": "drink",
                "qty": 1, 
                "uid": uuid()
            },
            {
                "name": "Beer",
                "price": 12,
                "category": "dinner",
                "qty": 1,
                "uid": uuid()
            }
        ]
    };

    return (
        <div className="menu-container">
            <h1>Menu</h1>
            <p>**Add items to cart and see the cart update**</p>
            {menu.items.map(item => (
                <MenuItem item={item} key={item.uid}/>
            ))}
        </div>
    )
}
export default MenuList;

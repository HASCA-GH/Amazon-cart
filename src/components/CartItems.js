import '../css/CartItems.css';
import React from 'react';
import CartItem from './CartItem';

function CartItems() {
    return (
        <div className="CartItems">
            <h1>Shopping Cart</h1>
            <hr />
            <div className="CartItems-items">
                <CartItem />
            </div>
        </div>
    )
}

export default CartItems

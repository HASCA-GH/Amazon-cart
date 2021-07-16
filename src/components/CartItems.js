import '../css/CartItems.css';
import React from 'react';
import CartItem from './CartItem';

function CartItems({itemxxs}) {
    console.log("Data cargada de Items - INSIDE the CartItems component: ", itemxxs);
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

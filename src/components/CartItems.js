import '../css/CartItems.css';
import React from 'react';
import CartItem from './CartItem';

function CartItems({items}) {
    const index="";
    console.log("Data cargada de Items - INSIDE the CartItems component: ", items);
    return (
        <div className="CartItems">
            <h1>Shopping Cart</h1>
            <hr />
            <div className="CartItems-items">
                {items.map((item) => 
                    <CartItem 
                        item = {item}
                        key = {index}
                    />
                )}
            </div>
        </div>
    )
}

export default CartItems

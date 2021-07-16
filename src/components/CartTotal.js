import '../css/CartTotal.css';
import React from 'react'

function CartTotal({items}) {
    const getTotalPrice = () => {
        // Init total price to 0
        // Loop through all the items in the cart
        // Add the price of item with the quantity to the total price
        // Return the total price

        let total=0;
        items.forEach((item) => {
            total += (item.price * item.quantity)
        })
        return total;
    }
    return (
        <div className="CartTotal">
            <h3>Subtotal ({items.length} items): 
                <span>{getTotalPrice()}</span>
            </h3>
            <button>Proceed to checkout</button>
        </div>
    )
}

export default CartTotal

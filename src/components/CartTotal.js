import '../css/CartTotal.css';
import React from 'react'

function CartTotal() {
    return (
        <div className="CartTotal">
            <h3>Subtotal (5 items): 
                <span>$2172.38</span>
            </h3>
            <button>Proceed to checkout</button>
        </div>
    )
}

export default CartTotal

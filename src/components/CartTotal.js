import '../css/CartTotal.css';
import React from 'react'
import NumberFormat from 'react-number-format';

function CartTotal({items}) {
    // console.log("AQUI estoy con item:" , items);
    const getTotalPrice = () => {
        // Init total price to 0
        // Loop through all the items in the cart
        // Add the price of item with the quantity to the total price
        // Return the total price
    
        let total=0;
        let totalitems=0;
        items.forEach((item) => {
            total += (item.price * item.quantity)
            totalitems += parseInt(item.quantity, 10);
            // console.log("AQUI estoy con total items:" , totalitems);
        })
        // total = total.toFixed(2); //redondea a 2 decimales ... rounds to 2 decimals
        return {total, totalitems};
    }

    // without using react format number
    // return (
    //     <div className="CartTotal">
    //         <h3>Subtotal ({getTotalPrice().totalitems} items): 
    //             <span>{getTotalPrice().total}</span>
    //         </h3>
    //         <button>Proceed to checkout</button>
    //     </div>
    // )
    
    
    // Using the react format number module:
    // <NumberFormat value={2456981} displayType={'text'} thousandSeparator={true} prefix={'$'} />

    // <NumberFormat value={getTotalPrice().total} displayType={'text'} thousandSeparator={true} prefix={'$'} />
    return (
        <div className="CartTotal">
            <h3>Subtotal ({getTotalPrice().totalitems} items): 
                <span>
                    <NumberFormat 
                        value={getTotalPrice().total} 
                        displayType={'text'} 
                        thousandSeparator={true} 
                        prefix={'S/.'} 
                        decimalScale={2}
                    />
                </span>
            </h3>
            <button>Proceed to checkout</button>
        </div>
    )
}



export default CartTotal

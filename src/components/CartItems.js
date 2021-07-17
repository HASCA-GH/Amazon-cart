import React from 'react';
import '../css/CartItems.css';
import CartItem from './CartItem';

// var index;
function CartItems({items, setCartItems}) {
    console.log("Data cargada de Items - INSIDE the CartItems component: ", items);

    const changeItemQuantity = (e, index) => {
        //When we select the quantity on item, we pass it in here
        //Pass in the index
        //Using the index we need to change the quantity to the selected one from select option
        //Update the items state

        console.log("Changed to: ", e.target.value);
        console.log("Index is: ", index);

        //OJOJOJO: DO NOT UPDATE THE STATE WITHOUT setter function... so trick is to create a clone of the hole state and then replace it, 
        //so we use the special manner using dots to make reference of the hole object state like this [...items]
        const newItems = [...items];
        newItems[index].quantity = e.target.value;
        // items[index].quantity = e.target.value;
        setCartItems(newItems);
    }

    const deleteItem = (e, indexToDelete) =>{
        //filter out the items where the item index does not equal to the selected item
        // console.log("Click en deleted....");
        // console.log("Index to delete: ", indexToDelete);
        console.log("Items before deleting 2:", items);
        const cloneItems = [...items];
        const newItems = cloneItems.filter((item, index) => {
            return index != indexToDelete;
        });
        console.log("Items after deleting : ", newItems);
        setCartItems(newItems);
    }
    return (
        <div className="CartItems">
            <h1>Shopping Cart</h1>
            <hr />
            <div className="CartItems-items">
                {items.map((item, index) => {
                    return <CartItem 
                        index={index}
                        item={item}
                        key={index}
                        changeItemQuantity={changeItemQuantity}
                        deleteItem={deleteItem}
                    />
                }) }
            </div>
        </div>
    )
}

export default CartItems

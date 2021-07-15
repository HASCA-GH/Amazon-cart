import React from 'react'
import '../css/CartItem.css'
// https://d500.epimg.net/cincodias/imagenes/2021/04/20/lifestyle/1618942528_752581_1618942625_noticia_normal.jpg
{/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYxh3WnJa7k1ZNU6Hcw2rF5f8HTqCvi5KHKg&usqp=CAU" alt=""></img> */}
{/* <img src="https://d500.epimg.net/cincodias/imagenes/2021/04/20/lifestyle/1618942528_752581_1618942625_noticia_normal.jpg" alt=""></img> */}
function CartItem() {
    return (
        <div className="CartItem">
            <div className="CartItem-image">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYxh3WnJa7k1ZNU6Hcw2rF5f8HTqCvi5KHKg&usqp=CAU" alt=""></img>
            </div>
            <div className="CartItem-info">
                <div className="info-title">
                    <h2>Apple iPad Pro</h2>
                </div>
                <div className="info-stock">
                    In Stock
                </div>
                <div className="item-actions">
                    <div className="item-quantity">
                       <select className="" id=""></select>
                    </div>
                    <div className="item-delete">Delete</div>
                </div>
            </div>
            <div className="CartItem-price">$769.00</div>
        </div>
    )
}

export default CartItem


        
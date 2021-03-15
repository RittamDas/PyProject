import React from 'react'
import './Checkout.css' 
import {useStateValue} from './StateProvider'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'
function Checkout() {
    const [{basket}] = useStateValue();
    const checkoutProduct = (item) => {
        return(
        <CheckoutProduct
                           id ={item.id}
                           title = {item.title}
                           rating = {item.rating}
                           price = {item.price}
                           image = {item.image}
                       />
        );};
    return (
        <div className="checkout">
        <div className = "checkout__right">
            <img
               className = "checkout__ad"
               src = "https://k4h6h8w8.stackpathcdn.com/blog/wp-content/uploads/2019/05/Know-about-Amazon-Ad-Types-and-Best-Practices-for-Campaign-Set-Up-732x244.jpg"
               alt="Checkout"
            >
            </img>
            {basket.length === 0?(
               <div>
                   <h2>
                       Your basket is Empty
                   </h2>
                </div>
               ):(
                   <div>
                   <h2 className = "checkout__title">Your Shopping Basket</h2>

                   {basket.map(checkoutProduct)}
                   </div>
               )}
               </div>
               {basket.length > 0 && (
                   <div className = "checkout__left">
                       <Subtotal />
                       </div>
               )}
        </div>
    );
}

export default Checkout

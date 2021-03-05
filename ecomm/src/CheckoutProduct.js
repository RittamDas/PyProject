import React from 'react'
import {FaStar} from 'react-icons/fa';
import './CheckoutProduct.css';
import {useStateValue} from './StateProvider';
function CheckoutProduct({id, title, rating, price, image}) {
    const [{basket}, dispatch] = useStateValue();
    console.log(basket);
    const removeFromBasket = () => {
         dispatch({
             type: "REMOVE_FROM_BASKET",
             id: id
         });
    };
    console.log(title);
    return (
        <div className = "checkoutProduct">
                 <img src = {image} alt  = "" className = "checkoutProduct__image"></img>
                 <div className="checkoutProduct__info">
                     
                      <p className = "checkoutProduct__title"><strong>{title}</strong></p>
                      <p className = "checkoutProduct__price">
                          <small>$</small>
                          <strong>{price}</strong>
                      </p>
                      <p className = "checkoutProduct__rating">
                      {
                          Array(rating).fill(0).map(()=>(<FaStar color='yellow' />))
                      }
               
                      </p>
                      <button onClick = {removeFromBasket}>Remove from Basket</button>
                 </div>
                 
                                      
        </div>
    );
}

export default CheckoutProduct

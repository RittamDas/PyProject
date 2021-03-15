import React from 'react';
import './Product.css';
import {FaStar} from 'react-icons/fa';
import {useStateValue} from './StateProvider';
function Product({title, price, image, rating, id}) {
    const [{basket},dispatch] = useStateValue();
    console.log(basket);
    const addToBasket = () => {
         dispatch({
             type: "ADD_TO_BASKET",
             id: id,
             title: title,
             price: price,
             image: image,
             rating: rating
         });
         console.log(basket);
    };
    return (
        <div className = "product">
            <p>{title}</p>
            <p className="product__price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className = "product__rating">
                {
                    Array(rating).fill(0).map(()=>(<FaStar color='yellow' />))
                }
               
            </div>
            <p>
                <img src = {image} alt="product image"></img>
            </p>
            <button onClick={addToBasket}>Add To Basket</button>
        </div>
    )
}

export default Product

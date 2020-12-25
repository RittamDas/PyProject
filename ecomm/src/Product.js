import React from 'react'
import './Product.css'
import {FaStar} from 'react-icons/fa'
function Product({title, price, image, rating, id}) {
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
                <img src = {image} alt=""></img>
            </p>
            <button>Add To Basket</button>
        </div>
    )
}

export default Product

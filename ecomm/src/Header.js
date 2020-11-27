import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
function Header() {
    return (
        <div className = "header">
            <Link to = "/login">
            <img 
               src = "http://pngimg.com/uploads/amazon/amazon_PNG11.png" 
               alt=""
               className = "header__logo"
            ></img>
            </Link>
            
        </div>
    );
}

export default Header

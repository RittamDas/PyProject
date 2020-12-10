import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
function Header() {
    return (
        <nav className = "header">
            <Link to = "/login">
            <img 
               src = "http://pngimg.com/uploads/amazon/amazon_PNG11.png" 
               alt=""
               className = "header__logo"
            ></img>
            </Link>
            <div className = "header__search">
             <input type="text" className="header__searchInput"></input>
             
            </div>
        </nav>
         
    );
}

export default Header

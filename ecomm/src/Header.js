import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'
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
             <SearchIcon className = "header__searchIcon" />
            </div>
            <div className = "header__nav">
                <Link to = "/login" className="header__link">
                    <div className="header__options">
                        <span className="header_optionLineOne">Hello</span>
                        <span className="header_optionLineTwo">Sign In</span>
                    </div>
                </Link>

                <Link to = "/" className="header__link">
                    <div className="header__options">
                        <span className="header_optionLineOne">Returns</span>
                        <span className="header_optionLineTwo">& Orders</span>
                    </div>
                </Link>

                <Link to = "/" className="header__link">
                    <div className="header__options">
                        <span className="header_optionLineOne">Try</span>
                        <span className="header_optionLineTwo">Prime</span>
                    </div>
                </Link>
            </div>
        </nav>
         
    );
}

export default Header

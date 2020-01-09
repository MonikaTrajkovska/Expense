import React from 'react'

import './Header.css'
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <React.Fragment>
         
         <header>
        <nav className="nav3">
            <div className="buttons3">
                <Link to='/products'>
                <button className="main-buttons3" id="products-btn3">Products</button></Link>
                <Link to='/expneses'>
                <button className="main-buttons3" id="expenses-btn3">Expenses</button>
                </Link>
            </div>
            {/* <div className="picture3">              
                    <p><img id="profile3" src="../../assets/images/profile.png.png" alt="profile"> Gal Gadot </img></p>
            </div> */}
        </nav>
        </header> 



        </React.Fragment>


    )
}

export default Header
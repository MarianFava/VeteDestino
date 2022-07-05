import React from "react";
import logo from "../../assets/logo2.png"
import "./Header.css"
import CartWidget from "../CartWidget/CartWidget";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";

const Header = () =>{
    return (
        <header>
        <img src={logo} className="imgLogo" alt="" />
        {/*<h1>Vete Destino Indumentaria</h1>*/}
        <nav>
            <a href="#">Winter 22</a>
            <a href="#">Sale</a>
            <a href="#">Contact Us</a>

        </nav>
        <CartWidget/>
        </header>
    )
}

export default Header
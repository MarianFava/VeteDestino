import React from "react";
import logo from "../../assets/logo2.png"
import carrito from "../../assets/carrito-de-compras.png"
import "./Header.css"
const Header = () =>{
    return (
        <header>
        <img src={logo} className="imgLogo" alt="" />
        <h1>Vete Destino Indumentaria</h1>
        <nav>
            <a href="#">Winter 22</a>
            <a href="#">Sale</a>
            <a href="#">Contact Us</a>

        </nav>
        {/*<img src={carrito} className="imgCarrito" alt="" />*/}
        </header>
    )
}

export default Header
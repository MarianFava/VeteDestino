import React from "react";
import logo from "../../assets/logo2.png"
import "./Navbar.css"
import CartWidget from "../CartWidget/CartWidget";
import {Link, NavLink} from "react-router-dom";
import LoginWidget from "../LoginWidget/LoginWidget";

const Navbar = () =>{

    const categorias=[
        { name:"Winter 22", id: "0", route:"/category/Winter 22"},
        { name:"Sale", id: "1",route:"/category/Sale"},
        { name:"Contact Us", id: "2",route:"/category/Contact Us"}
    ]
    return (
        <header>
        <Link to="/" className="imgLogo"><img src={logo}  alt="" /></Link>
        <nav>
            {categorias.map((category) =>  <NavLink className="btnNav" key= {category.id} to={category.route}>{category.name}</NavLink>)}

        </nav>
        <Link to="/login"><LoginWidget/></Link>
        <Link to="/cart"><CartWidget/></Link>
        </header>
    )
}

export default Navbar
import React from "react";
import "./LoginWidget.css";
import login from "../../assets/login.png";

const LoginWidget = () =>{
    return (
        <div className="logDiv">
        <button className="btnLogin">
        <img src={login} className="imgLogin" alt="" />
        </button>
        </div>
    )
}

export default LoginWidget;
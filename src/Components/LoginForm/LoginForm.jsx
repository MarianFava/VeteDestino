import React from 'react'
import { useState } from 'react';
import "./LoginForm.css";

const LoginForm = () => {
  const [cliente, setCliente] = useState(
    {
      nombre: "",
      email:"",
      telefono:"",
      direccion:""
  });

  const [mensaje, setMensaje] = useState("");

  const onHandleClickRegistrar = (event)=>{
    event.preventDefault();
    if (cliente.nombre = "") {
      setMensaje("Completar nombre");
      return;
    }
    if (cliente.email = "") {
      setMensaje("Completar email");
      return;
    }
    if (cliente.telefono = "") {
      setMensaje("Completar teléfono");
      return;
    }
    if(cliente.direccion = "") {
      setMensaje("Completar Dirección");
      return;
    }
  }

  const onChangeNombre = (e) => {
    setCliente({...cliente,nombre:e.target.value});
  }
  const onChangeEmail = (e) => {
    setCliente({...cliente,email:e.target.value})
  }
  const onChangeTelefono = (e) => {
    setCliente({...cliente,telefono:e.target.value})
  }
  const onChangeDireccion = (e) => {
    setCliente({...cliente,direccion:e.target.value})
  }

  return (
    <div className='containerLog'>
        <div className='content'>
        <div className='heading'>
        <h2>Registro</h2>
        <div>
            <form action="#">
                <input
                  type="text"
                  name="nombre"
                  value={cliente.nombre}
                  placeholder="Nombre"
                  onChange={onChangeNombre}/>
                <input
                  type="email"
                  name="email"
                  value={cliente.email}
                  placeholder="Email"
                  onChange={onChangeEmail}/>
                <input
                  type="tel"
                  name="telefono"
                  value={cliente.telefono}
                  placeholder="Teléfono"
                  onChange={onChangeTelefono}/>
                <input
                 type="text"
                  name="direccion"
                  value={cliente.direccion}
                  placeholder="Dirección"
                  onChange={onChangeDireccion}/>
                 {mensaje?<label>{mensaje}</label>:''}
                <button className="btnReg" onClick={onHandleClickRegistrar}>Registrarme</button>
            </form>
        </div>
        </div>
        </div>
    </div>
  )
}
export default LoginForm;
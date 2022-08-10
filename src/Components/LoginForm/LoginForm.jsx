import React from 'react'
import "./LoginForm.css";

const LoginForm = () => {
  return (
    <div className='containerLog'>
        <div className='content'>
        <div className='heading'>
        <h2>Registro</h2>
        <div>
            <form action="#">
                <input type="text" name="nombre" placeholder="Nombre"/>
                <input type="email" name="email" placeholder="Email"/>
                <input type="tel" name="telefono" placeholder="Teléfono"/>
                <input type="text" name="direccion" placeholder="Dirección"/>
                <button className="btnReg">Registrarme</button>
            </form>
        </div>
        </div>
        </div>
    </div>
  )
}
export default LoginForm;
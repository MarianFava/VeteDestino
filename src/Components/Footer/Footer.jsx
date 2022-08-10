import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="cont">
          <div className="row">
            <div>
              <h4>Vete Destino Indumentaria</h4>
              <p>Envíos a todo el país. Venta por mayor y menor.</p>
            </div>
            <div>
              <h4>Atención Tienda Online</h4>
              <ul>
                <li>
                  <a href="#">Cómo comprar</a>
                </li>
                <li>
                  <a href="#">Envíos y medios de pago</a>
                </li>
                <li>
                  <a href="#">Preguntas frecuentes</a>
                </li>
                <li>
                  <a href="#">Cambios y devoluciones</a>
                </li>
              </ul>
            </div>
            <div>
              <h4>Social</h4>
              <div className ="socialButton">
              <ul>
                <li>
                  <a href="#">Instagram</a>
                </li>
                <li>
                  <a href="#">Facebook</a>
                </li>
                <li>
                  <a href="#">Whatsapp</a>
                </li>
                <li>
                  <a href="#">Email</a>
                </li>
              </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

import React from "react";
import { Link } from "react-router-dom";
import { NavFootCatego } from "../Fcategorias/Fcategorias";

export default function FSoporte() {
  return (
    <NavFootCatego>
      <h3>Soporte</h3>
      <nav>
        <Link to="/" className="linkfoot" href="#section">Preguntas Frecuentes</Link>
        <Link to="/" className="linkfoot" href="#section">Ayuda en línea</Link>
        <Link to="/" className="linkfoot" href="#section">Confianza y Seguridad</Link>
      </nav>
    </NavFootCatego>
  );
}


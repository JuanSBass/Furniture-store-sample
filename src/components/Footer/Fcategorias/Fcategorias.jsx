import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


export default function FCategorias() {
  return (
    <NavFootCatego>
      <h3>Categorias</h3>
      <nav className="navegacion">
        <Link to="" className="linkfoot">Cocina</Link>
        <Link to="" className="linkfoot">Oficina</Link>
        <Link to="" className="linkfoot">Jardín</Link>
        <Link to="" className="linkfoot">Cochera</Link>
        <Link to="" className="linkfoot">Dormitorios</Link>
      </nav>
    </NavFootCatego>
  );
}

export const NavFootCatego = styled.nav`
  padding: 0 10rem;
  
  nav{
    text-transform: uppercase;
  }
  h3{
    margin-bottom: 2rem;
  }
`
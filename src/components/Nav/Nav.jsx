import React from 'react'
import {NavLink} from "react-router-dom"
import styled from 'styled-components'

export default function Nav(){
  return(
      <Navprincipal>
        <NavLink to="/" className="linknav">Inicio</NavLink> 
        <NavLink to="/nosotros" className="linknav">Nosotros</NavLink>
        <NavLink to="/tienda" className="linknav">Tienda</NavLink>
        <NavLink to="/blog" className="linknav">Blog</NavLink>
        <NavLink to="/galeria" className="linknav">Galeria</NavLink>
        <NavLink to="/contacto" className="linknav">Contacto</NavLink>
      </Navprincipal>
  )
}

const Navprincipal = styled.nav`
  display: flex;
  justify-content: space-around;
  border-top: .1rem solid #736b5e;
  //        ↑ ancho, tipo, color ↑
  padding: 2rem 0;
  max-width: 120rem;
  margin: 0 auto;
  /* transition: all .8s; */
  position: relative;
  font-weight: bold;
  text-decoration: none
  
`;
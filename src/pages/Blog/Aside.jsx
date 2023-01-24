import React from "react";
// import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default function Aside() {
  return (
    <AsideList data-aos="fade-down-left">
      <h3>Otras Entradas de Blog</h3>
      <ul>
        <li>
          <a href="#1">Guia de Colores</a>
        </li>
        <li>
          <a href="#2">Nuevos Modelos</a>
        </li>
        <li>
          <a href="#3">Guia Diseño de interiores</a>
        </li>
        <li>
          <a href="#4">Guia Diseño de Exteriores</a>
        </li>
      </ul>
    </AsideList>
  );
}

const AsideList = styled.aside`
  position: fixed;
  left: 70%;
  height: 40rem;
  transition: all 0.9s ease-out;
  ul {
    height: 20rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    list-style: none;
    padding: 0;
    
    a {
      /* box-shadow: inset 0 0 0 0 #037bc0; */
      /* position: absolute; */
      overflow: hidden;
      inset: 0;
      width:0%;
      margin: 0 -0.25rem;
      padding: 0 0.25rem;
      transition: all .5s ease-in-out, box-shadow 1s ease-in-out;
      &:hover {
        /* box-shadow: inset 20rem 0 0 0 #037bc0; */
        width: 100%;
        filter: drop-shadow(-.5rem -.5rem 1rem #03a2ff);
        color: #e3bdac;
        text-transform: uppercase;
    }
  }
  /* &:hover {
    background-color: #e1e1e117;
  } */
}
`;

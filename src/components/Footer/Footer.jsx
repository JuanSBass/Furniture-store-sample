import React from "react";
import styled from "styled-components";
import FSobreNosotros from "./FSobreNosotros/FSobreNosotros";
import FCategorias from "./Fcategorias/Fcategorias";
import FSoporte from "./FSoporte/FSoporte";

export default function Footer() {
  return (
    <ConteinerFooter>
      <FCategorias />
      <FSobreNosotros />
      <FSoporte />
    </ConteinerFooter>
  );
}

const ConteinerFooter = styled.div`
  border-top: 1px solid #e1e1e117;
  margin-top: 7rem;
  margin-bottom: 5rem;
  display: flex;
  justify-content: center;
  background-image: linear-gradient(to top,#131516 15%,#e1e1e117 100%); 
  padding: 1rem;
  text-align: left;

`

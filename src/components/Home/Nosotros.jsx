import React from "react";
import styled from "styled-components";
import imgNosotros from "../img/nosotros.jpg";

export default function Nosotros() {
  return (
    <SobreNosotros>
      <section>
        <div>
          <h2>Sobre Nosotros</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            iusto, soluta, nobis quasi vitae ipsa optio, exercitationem iure
            sunt rerum ex cum magnam vero a! Mollitia eveniet maxime minima
            commodi.
          </p>
        </div>
      </section>
    </SobreNosotros>
  );
}
export const azul = "#037bc0";
export const maxWidth = "120rem";
const SobreNosotros = styled.section`
  background-image: linear-gradient(
      to right,
      transparent 50%,
      ${azul} 50%,
      ${azul} 100%
    ),
    url(${imgNosotros}); //* variable en app del color de la app
  //? degradado linear ->          ↑hacia...  , 1st color % , 2th color %, ... , n color.
  padding: 10rem 0;
  margin: 5rem 0;
  background-repeat: no-repeat;
  background-position: left center;
  background-size: 100%, 130rem;
  section {
    display: flex;
    justify-content: flex-end;
    max-width: ${maxWidth};
    margin: 0 auto; //? esto para centrar!!
  }
  div{
    flex-basis: 45%; //? modifica el ancho del box
    text-align: left;
  }
  
`;

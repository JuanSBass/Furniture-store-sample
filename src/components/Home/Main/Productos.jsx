import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Producto({ imagen, tittle, precio }) {
  return (
    <ProductoCard data-aos="zoom-out-right">
      <img src={imagen} alt="ximagen" />
      <div>
        <h3>{tittle}</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          iusto, soluta, nobis quasi vitae ipsa optio, exercitationem iure sunt
          rerum ex cum magnam vero a! Mollitia eveniet maxime minima commodi.
        </p>
        <p>{precio}</p>
        <Link className="button">Agregar al Carrito</Link>
      </div>
    </ProductoCard>
  );
}

const ProductoCard = styled.div`
  div {
    margin: 2rem;
    display: grid;
    place-items: center;
    margin: 0 auto;
    padding: 1rem;
    border:.1rem solid #717171;
    border-top: none;
    border-radius: 0 0 2rem 2rem;
    transition: background-color .5s ease-in-out;
    &:hover {
      background-color: #037bc0;
      border: none;
      border-radius: 0 0 2rem 2rem;
    }
  }
  h3 {
    margin: 0;
  }
  .button {
    background-color: #8cbc00;
    display: block;
    text-transform: uppercase;
    font-weight: 900;
    padding: 2rem;
    transition: background-color 0.3s ease-out; /* ojo acá*/
    margin: 2rem 0 0;
    border-radius: 1rem;
  }
  .button:hover {
    background-color: #769c02;
  }
  &:nth-child(1) {
    grid-column: 1/7;
    display: grid;
    grid-template-columns: 3fr 1fr;
    div{
      border-radius: 0 2rem 2rem 0;
      border-top: 1rem;
    }
  }
  &:nth-child(1) img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  &:nth-child(2) {
    grid-column: 1/4;
  }
  &:nth-child(3) {
    grid-column: 4/7;
  }
  &:nth-child(4) {
    grid-column: 1/3;
  }
  &:nth-child(5) {
    grid-column: 3/5;
  }
  &:nth-child(6) {
    grid-column: 5/7;
  }
`;

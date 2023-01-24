import styled from "styled-components";
import cat1 from "../img/categoria1.jpg";
import categoria2 from "../img/categoria2.jpg";
import categoria3 from "../img/categoria3.jpg";

export default function Categorias() {
  return (
    <section className="categoconteiner">
      <h2>Categorias de Productos</h2>
      <Listadocat>
        <div>
          <img src={cat1} alt="mueble" />
          <a href="#section">Oficina</a>
        </div>

        <div>
          <img src={categoria2} alt="mueble" />
          <a href="#section">Hogar</a>
        </div>

        <div>
          <img src={categoria3} alt="mueble" />
          <a href="#section">Cocina</a>
        </div>
      </Listadocat>
    </section>
  );
}

const Listadocat = styled.div` // Acá sería el conteiner 
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 120rem;
  margin: 0 auto;
  a {
    border:.1rem solid #717171;
    border-top: none;
    border-radius: 0 0 2rem 2rem;
    padding: 2rem;
    display: block;
    font-size: 2rem;
    transition: box-shadow .5s ease-out;
    &:hover {
      //? pseudo al link <a />
      background-color: #037bc0;
      font-weight: bold;
      border: none;
      box-shadow: -1px 32px 38px -6px rgb(247, 243, 243, 1);
      -webkit-box-shadow: -1px 32px 38px -6px rgba(247, 243, 243, 1);
      -moz-box-shadow: -1px 32px 38px -6px rgba(247, 243, 243, 1);
    }
  }
`;

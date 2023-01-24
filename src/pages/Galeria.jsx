import styled from "styled-components";
import img1 from "../components/img/galeria_01.jpg";
import img2 from "../components/img/galeria_02.jpg";
import img3 from "../components/img/galeria_03.jpg";
import img4 from "../components/img/galeria_04.jpg";
import img5 from "../components/img/galeria_05.jpg";
import img6 from "../components/img/galeria_06.jpg";
import img7 from "../components/img/galeria_07.jpg";
import img8 from "../components/img/galeria_08.jpg";
import img9 from "../components/img/galeria_09.jpg";

export default function Galeria() {
  imagenes.map(elem => console.log(elem));
  return (
    <div>
      <GaleriaContainer>
        {imagenes.map((img) => (
          <figure key={img.id}>
            {/* <Link> */}
              <img src={img.image} alt={img.image} />
            {/* </Link> */}
            <div>
              <h3>{img.title}</h3>
              <p>{img.descripcion}</p>
            </div>
          </figure>
        ))}
      </GaleriaContainer>
    </div>
  );
}

//#037bc0 - #8cbc00


const GaleriaContainer = styled.main`
  width: 120rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  figure{
    /* margin: 2rem; */
    position: relative;
    overflow: hidden;
    border-radius: 1rem;
    /* box-shadow: 0 1.5rem 2.5rem #8dbc0080; */
    cursor: pointer;
    &:hover{
      box-shadow: 0 1.5rem 2.5rem #037bc080;
    }
    &:hover > div { //* indica al div por encima
      opacity: 1;
      visibility: visible;
    }
    &:hover > img{
      transform: scale(1.3);
    }
  }
  img {
    width: 40rem;
    height: 40rem;
    object-fit: cover; //? Esto sirve para que cubra todo el contenedor
    transition: all .5s ease-out;
  }
  div{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .5);
    transition: all .5s ease-out;
    opacity: 0;
    visibility: hidden;
    p{
      margin: 0 1rem;
    }
    

  }
`;

const imagenes = [
  {
    id: 1,
    title: "Imagen Numero Uno",
    image: img1,
    descripcion:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, libero enim! Explicabo pariatur aspernatur commodi debitis sit, maxime cum, rerum qui fugit atque suscipit aut accusamus nobis doloremque repellendus eaque.",
  },
  {
    id: 2,
    title: "Imagen Electrico",
    image: img2,
    descripcion:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, libero enim! Explicabo pariatur aspernatur commodi debitis sit, maxime cum, rerum qui fugit atque suscipit aut accusamus nobis doloremque repellendus eaque.",
  },
  {
    id: 3,
    image: img3,
    title: "Imagen Tomato",
    descripcion:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, libero enim! Explicabo pariatur aspernatur commodi debitis sit, maxime cum, rerum qui fugit atque suscipit aut accusamus nobis doloremque repellendus eaque.",
  },
  {
    id: 4,
    image: img4,
    title: "Imagen Rerum",
    descripcion:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, libero enim! Explicabo pariatur aspernatur commodi debitis sit, maxime cum, rerum qui fugit atque suscipit aut accusamus nobis doloremque repellendus eaque.",
  },
  {
    id: 5,
    image: img5,
    title: "Imagen dolor sit amet",
    descripcion:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, libero enim! Explicabo pariatur aspernatur commodi debitis sit, maxime cum, rerum qui fugit atque suscipit aut accusamus nobis doloremque repellendus eaque.",
  },
  {
    id: 6,
    image: img6,
    title: "Imagen Explicabo",
    descripcion:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, libero enim! Explicabo pariatur aspernatur commodi debitis sit, maxime cum, rerum qui fugit atque suscipit aut accusamus nobis doloremque repellendus eaque.",
  },
  {
    id: 7,
    image: img7,
    title: "Imagen Galeria",
    descripcion:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, libero enim! Explicabo pariatur aspernatur commodi debitis sit, maxime cum, rerum qui fugit atque suscipit aut accusamus nobis doloremque repellendus eaque.",
  },
  {
    id: 8,
    image: img8,
    title: "Imagen Tui",  
    descripcion:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, libero enim! Explicabo pariatur aspernatur commodi debitis sit, maxime cum, rerum qui fugit atque suscipit aut accusamus nobis doloremque repellendus eaque.",
  },
  {
    id: 9,
    image: img9,
    title: "Imagen Principal",
    descripcion:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, libero enim! Explicabo pariatur aspernatur commodi debitis sit, maxime cum, rerum qui fugit atque suscipit aut accusamus nobis doloremque repellendus eaque.",
  }
];

import Productos from "./Productos"
import tarjeta1 from "../../img/producto1.jpg"
import tarjeta2 from "../../img/producto2.jpg"
import tarjeta3 from "../../img/producto3.jpg"
import tarjeta4 from "../../img/producto4.jpg"
import tarjeta5 from "../../img/producto5.jpg"
import tarjeta6 from "../../img/producto6.jpg"

import styled from "styled-components";


export default function Main(){
  return(
    <main>
      <h2>Nuestros Productos</h2>
      <ConteinerProductos >
        {products.map((e) => <Productos imagen={e.imagen} tittle={e.tittle} precio={e.precio} key={e.id} />)}
      </ConteinerProductos>
    </main>
  )
}

export const ConteinerProductos = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  padding: 1rem;
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(6, 1fr); /* 6 columnas*/

`

  
export const products = [
  {
    id: 1,
    imagen: tarjeta1,
    tittle: "Producto1",
    precio: "$1,000.00"
  },
  {
    id: 2,
    imagen: tarjeta2,
    tittle: "Producto2",
    precio: "$1,040.00"
  },
  {
    id: 3,
    imagen: tarjeta3,
    tittle: "Producto3",
    precio: "$1,120.00"
  },
  {
    id: 4,
    imagen: tarjeta4,
    tittle: "Producto4",
    precio: "$2,300.00"
  },
  {
    id: 5,
    imagen: tarjeta5,
    tittle: "Producto5",
    precio: "$1,800.00"
  },
  {
    id: 6,
    imagen: tarjeta6,
    tittle: "Producto6",
    precio: "$2,500.00"
  }
]
import React from "react";
import styled from "styled-components";



export default function Post({
  id,
  title,
  fecha,
  escrito,
  post1,
  post2,
  imagen,
}) {
  return (
    <PostBlog id={id} data-aos="fade-right"
    data-aos-offset="300"
    data-aos-easing="ease-in-sine">
      <h2>{title}</h2>
      <div>
        <img src={imagen} alt="" />
      </div>
      <div className="meta" >
        <p>
          Fecha: <em>{fecha}</em>
        </p>
        <p>
          Escrito por: <em>{escrito}</em>
        </p>
      </div>

      <section>
        <p>{post1}</p>
        <p>{post2}</p>
      </section>

      <a href="#1" className="button">
        Leer
      </a>
    </PostBlog>
  );
}

const PostBlog = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom: 2px solid;
  padding-bottom: 2rem;
  margin-bottom: 3rem;
  &:last-child {
    border: none;
  }
  .meta {
    display: flex;
    justify-content: space-between;
    em {
      color: #037bc0;
    }
  }
  .button {
    background-color: #8cbc00;
    display: block;
    text-transform: uppercase;
    font-weight: 900;
    padding: 1rem;
    transition: background-color 0.3s ease-out; /* ojo acá*/
    margin: 1rem;
    border-radius: 1rem;
    max-width: 30rem;
  }
  .button:hover {
    background-color: #769c02;
  }
  section{
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 2rem;
    text-align: left;
  }
`;

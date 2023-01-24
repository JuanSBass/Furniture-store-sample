import styled from "styled-components";
import Post from "./Post";
import img1 from "../../components/img/nosotros.jpg";
import Aside from "./Aside";

export default function Blog() {
  return (
    <BlogPage>
      <h2>Nuestro Blog</h2>
      <ContainerBlogPage>
        <div>
          {posts.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              title={post.title}
              fecha={post.fecha}
              escrito={post.escrito}
              post1={post.post1}
              post2={post.post2}
              imagen={img1}
            />
          ))}
        </div>

        <Aside />
      </ContainerBlogPage>
    </BlogPage>
  );
}

const BlogPage = styled.main`
  max-width: 120rem;
  margin: 0 auto;
`;

const ContainerBlogPage = styled.section`
  display: grid;
  grid-template-columns: 2fr 1fr;
  column-gap: 4rem;
`;

const posts = [
  {
    id: 1,
    title: "Guia de Colores",
    fecha: "20 de Septiembre del 2022",
    escrito: "TiendaMuebles",
    post1:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, maxime voluptatum laudantium nobis cupiditate in impedit doloribus enim velit neque nam hic nostrum ipsum nemo modi suscipit sequi vel iure.",
    post2:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, maxime voluptatum laudantium nobis cupiditate in impedit doloribus enim velit neque nam hic nostrum ipsum nemo modi suscipit sequi vel iure.",
    imagen: img1,
  },
  {
    id: 2,
    title: "Nuevos Modelos 2022",
    fecha: "24 de Julio del 2022",
    escrito: "TiendaMuebles",
    post1:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, maxime voluptatum laudantium nobis cupiditate in impedit doloribus enim velit neque nam hic nostrum ipsum nemo modi suscipit sequi vel iure.",
    post2:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, maxime voluptatum laudantium nobis cupiditate in impedit doloribus enim velit neque nam hic nostrum ipsum nemo modi suscipit sequi vel iure.",
    imagen: img1,
  },
  {
    id: 3,
    title: "Guia de Diseño de Interiores",
    fecha: "04 de Mayo del 2022",
    escrito: "TiendaMuebles",
    post1:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, maxime voluptatum laudantium nobis cupiditate in impedit doloribus enim velit neque nam hic nostrum ipsum nemo modi suscipit sequi vel iure.",
    post2:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, maxime voluptatum laudantium nobis cupiditate in impedit doloribus enim velit neque nam hic nostrum ipsum nemo modi suscipit sequi vel iure.",
    imagen: img1,
  },
  {
    id: 4,
    title: "Guia de Diseño de Exteriores",
    fecha: "03 de Febrero del 2022",
    escrito: "TiendaMuebles",
    post1:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, maxime voluptatum laudantium nobis cupiditate in impedit doloribus enim velit neque nam hic nostrum ipsum nemo modi suscipit sequi vel iure.",
    post2:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, maxime voluptatum laudantium nobis cupiditate in impedit doloribus enim velit neque nam hic nostrum ipsum nemo modi suscipit sequi vel iure.",
    imagen: img1,
  },
];

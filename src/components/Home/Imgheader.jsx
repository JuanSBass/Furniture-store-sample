import styled from "styled-components";
import principal from "../img/principal.jpg"

const Topimg = styled.div`
  margin: 0 auto;
  background-image: url(${principal});
  background-size: 150%; 
  height: 35rem;
  width: 120rem;
  animation: movimiento 15s linear infinite;
  /* background-position: center center; // <- posicionas a donde quieres que se muestre la img */
  /* background-attachment: fixed; */
  @keyframes movimiento{
    from{
      background-position: bottom left;
    } to {
      background-position: top right;
    }
  }
`;

export default function Imgheader(){
  return(
    <Topimg />
  )
}
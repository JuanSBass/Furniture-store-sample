import styled from "styled-components"

const Titulo = styled.div`
  margin-top: 5rem
`

const Muebs = styled.span`
  color: #037bc0;
`

export default function Header(){
  return(
    <Titulo>
      <h1>Tienda <Muebs>Muebles</Muebs></h1>
    </Titulo>

  )
}


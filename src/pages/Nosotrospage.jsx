import styled from "styled-components";
import imgSobreNosotros from "../components/img/nosotros.jpg";

export default function Nosotrospage() {
  return (
    <SobreNosotrosPage>
      <h2>Sobre Nosotros</h2>
      <ConteinerNosotrosPage>
        <div>
          <img src={imgSobreNosotros} alt="sillon" />
        </div>
        <section>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
            voluptate neque porro accusantium, dignissimos quam id facere
            blanditiis facilis ut, eveniet eum a mollitia in modi quos inventore
            dolores temporibus!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
            voluptate neque porro accusantium, dignissimos quam id facere
            blanditiis facilis ut, eveniet eum a mollitia in modi quos inventore
            dolores temporibus!
          </p>
        </section>
      </ConteinerNosotrosPage>
    </SobreNosotrosPage>
  );
}

const SobreNosotrosPage = styled.div`
  h3{
    margin-top: 2rem;
  }
`;

const ConteinerNosotrosPage = styled.div`
  display: grid;
  max-width: 120rem;
  margin: 0 auto;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  column-gap: 4rem;
  section{
    text-align: justify;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

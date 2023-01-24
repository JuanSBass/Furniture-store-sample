import { Link } from "react-router-dom";
import { NavFootCatego } from "../Fcategorias/Fcategorias";

export default function FSobreNosotros() {
  return (
    <NavFootCatego>
      <h3>Sobre Nosotros</h3>
      <nav className="sobre-nosotros">
        <Link to="/" className="linkfoot">Nuestra Historia</Link>
        <Link to="/" className="linkfoot">Misión, Visión y Valores</Link>
        <Link to="/" className="linkfoot">Carreras</Link>
        <Link to="/" className="linkfoot">Política de Privacidad</Link>
        <Link to="/" className="linkfoot">Términos del Servicio</Link>
      </nav>
    </NavFootCatego>
  );
}


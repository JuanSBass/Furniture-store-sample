import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Contacto from "./pages/Contacto";
import Galeria from "./pages/Galeria";
import Nosotrospage from "./pages/Nosotrospage";
import Tienda from "./pages/Tienda";
import Blog from "./pages/Blog/Blog";

import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="/Galeria" element={<Galeria />} />
          <Route path="/Nosotros" element={<Nosotrospage />} />
          <Route path="/Tienda" element={<Tienda />} />
          <Route path="/Blog" element={<Blog />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      <p>
        &copy; Copyright 2022. Página realizada por Juan Santillan. Todos los
        derechos reservados
      </p>
    </div>
  );
}

export default App;

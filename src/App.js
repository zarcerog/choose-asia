import QuiSom from "./components/qui-som";
import Contact from "./components/Contacte"
import PaginaPrincipal from "./components/Pagina-principal";
import Navbar from "./components/Navbar";
import LaIdea from "./components/La-idea";
import QueFem from "./components/que-fem";
import Tours from "./components/tours";
import Allotjament from "./components/Allotjament";
import QueCalSaber from "./components/que-cal-saber";
import Galeria from "./components/galeria";
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [nav, setNav] = useState(false);
  return (
    <div>
      <Navbar nav={nav} setNav={setNav} />
      <Routes>
        <Route path="/" element={<PaginaPrincipal />} />
        <Route path="/qui-som" element={<QuiSom />} />
        <Route path="/la-idea" element={<LaIdea nav={nav}/>} />
        <Route path="/que-fem" element={<QueFem />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/allotjament" element={<Allotjament />} />
        <Route path="/galeria" element={<Galeria nav={nav} />} />
        <Route path="/que-cal-saber" element={<QueCalSaber nav={nav} />} />
        <Route path="/contacte" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;

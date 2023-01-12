import QuiSom from "./components/qui-som";
import Contact from "./components/Contact";
import PaginaPrincipal from "./components/Pagina-principal";
import Navbar from "./components/Navbar";
import LaIdea from "./components/La-idea";
import QueFem from "./components/que-fem";
import Tours from "./components/tours";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<PaginaPrincipal />} />
        <Route path="/qui-som" element={<QuiSom />} />
        <Route path="/la-idea" element={<LaIdea />} />
        <Route path="/que-fem" element={<QueFem />} />
        <Route path="/tours" element={<Tours />} />
      </Routes>
    </div>
  );
}

export default App;

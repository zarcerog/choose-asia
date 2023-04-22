import QuiSom from "./pages/qui-som";
import Contact from "./pages/Contacte"
import PaginaPrincipal from "./pages/Pagina-principal";
import Navbar from "./pages/Navbar";
import LaIdea from "./pages/La-idea";
import QueFem from "./pages/que-fem";
import Tours from "./pages/tours";
import Allotjament from "./pages/Allotjament";
import QueCalSaber from "./pages/que-cal-saber";
import Galeria from "./pages/galeria";
import Blog from "./pages/Blog";
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { Helmet } from "react-helmet";
import { useTranslation } from 'react-i18next';
import Post from "./pages/Post";
import NotFound from "./pages/NotFound";

function App() {
  const [nav, setNav] = useState(false);

  const { t } = useTranslation();

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{t('slogan')}</title>
        <meta name="description" content={t('slogan')} />
      </Helmet>
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
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<Post />} />
          <Route path="/contacte" element={<Contact />} />
          <Route Component={NotFound} path="*" />
        </Routes>
    </div>
  );
}

export default App;

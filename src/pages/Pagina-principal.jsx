import React from 'react';
import { useTranslation } from 'react-i18next';

const PrincipalEsp = () => {
  return (
    <div name='pagina-principal' className='w-full h-screen bg-[url(assets/pagina-principal-es.jpg)] bg-no-repeat bg-left md:bg-center bg-cover'></div>
  );
};

const PrincipalCat = () => {
  return (
    <div name='pagina-principal' className='w-full h-screen bg-[url(assets/pagina-principal-ca.jpg)] bg-no-repeat bg-left md:bg-center bg-cover'></div>
  );
};

const PaginaPrincipal = () => {
  const { i18n } = useTranslation();

  if (i18n.language === 'es') {
    return <PrincipalEsp />
  } else {
    return <PrincipalCat />
  }
};

export default PaginaPrincipal;
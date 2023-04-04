import React from 'react';
import {
  FaBars,
  FaTimes
} from 'react-icons/fa';
import Logo from '../assets/logo.jpg';
import { useTranslation } from 'react-i18next';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import spain from '../assets/spain.png';
import catalonia from '../assets/catalonia.png';

const Navbar = ({nav, setNav}) => {
  const handleClick = () => setNav(!nav);
  const { t, i18n } = useTranslation();

  return (
    <div className='fixed w-full h-[56px] flex justify-between items-center px-4 bg-[white] text-black font-lato font-thin text-lg'>
      <div>
        <Link to='/' className='flex items-center gap-4'>
          <img src={Logo} alt='Logo Image' className='w-16' />
          <span className='font-light title text-[15pt]'>Viatge d'autor</span>
        </Link>
      </div>

      {/* menu */}
      <ul className='hidden xl:flex xl:items-center text-base font-light'>
        <CustomLink to='/'>{t('navbar.pagPrincipal')}</CustomLink>
        <CustomLink to='/qui-som'>{t('navbar.quiSom')}</CustomLink>
        <CustomLink to='/la-idea'>{t('navbar.laIdea')}</CustomLink>
        <CustomLink to='/que-fem'>{t('navbar.queFem')}</CustomLink>
        <CustomLink to='/tours'>{t('navbar.tours')}</CustomLink>
        <CustomLink to='/allotjament'>{t('navbar.allotjament')}</CustomLink>
        <CustomLink to='/galeria'>{t('navbar.galeria')}</CustomLink>
        <CustomLink to='/que-cal-saber'>{t('navbar.queCalSaber')}</CustomLink>
        <CustomLink to='/contacte'>{t('navbar.contacte')}</CustomLink>
        <li className='flex'>
          <button
            id='ca'
            className='text-black font-light text-base hidden'
            onClick={toggle('ca', i18n, '')}
          >
            <img src={catalonia} alt="Alt" className=' w-6' />
          </button>
          <button
            id='es'
            className='text-black font-light text-base'
            onClick={toggle('es', i18n, '')}
          >
            <img src={spain} alt="Alt" className=' w-6' />
          </button>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='xl:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#ffffff] flex flex-col justify-center items-center'
        }
      >
        <li className='text-4xl py-3'>
          <CustomLink onClick={handleClick} to='/'>{t('navbar.pagPrincipal')}</CustomLink>
        </li>
        <li className='text-4xl py-3'>
          <CustomLink onClick={handleClick} to='/qui-som'>{t('navbar.quiSom')}</CustomLink>
        </li>
        <li className='text-4xl py-3'>
          <CustomLink onClick={handleClick} to='/la-idea'>{t('navbar.laIdea')}</CustomLink>
        </li>
        <li className='text-4xl py-3'>
          <CustomLink onClick={handleClick} to='/que-fem'>{t('navbar.queFem')}</CustomLink>
        </li>
        <li className='text-4xl py-3'>
          <CustomLink onClick={handleClick} to='/tours'>{t('navbar.tours')}</CustomLink>
        </li>
        <li className='text-4xl py-3'>
          <CustomLink onClick={handleClick} to='/allotjament'>{t('navbar.allotjament')}</CustomLink>
        </li>
        <li className='text-4xl py-3'>
          <CustomLink onClick={handleClick} to='/galeria'>{t('navbar.galeria')}</CustomLink>
        </li>
        <li className='text-4xl py-3'>
          <CustomLink onClick={handleClick} to='/que-cal-saber'>{t('navbar.queCalSaber')}</CustomLink>
        </li>
        <li className='text-4xl py-3'>
          <CustomLink onClick={handleClick} to='/contacte'>{t('navbar.contacte')}</CustomLink>
        </li>
        <li className='flex'>
          <button
            id='ca_mobile'
            className='text-black font-light text-base hidden'
            onClick={toggle('ca', i18n, '_mobile')}
          >
            <img src={catalonia} alt="Alt" className=' w-6' />
          </button>
          <button
            id='es_mobile'
            className='text-black font-light text-base'
            onClick={toggle('es', i18n, '_mobile')}
          >
            <img src={spain} alt="Alt" className=' w-6' />
          </button>
        </li>
      </ul>
    </div>
  );
};

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? 'active' : ''}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}

export const nav = false;

export default Navbar;

const toggle = (lang, i18n, elementId) => () => {
  const cat = document.getElementById('ca' + elementId);
  const esp = document.getElementById('es' + elementId);
  if (lang === 'ca') {
    cat.classList.toggle('hidden');
    esp.classList.toggle('hidden');
  } else {
    esp.classList.toggle('hidden');
    cat.classList.toggle('hidden');
  }
  i18n.changeLanguage(lang);
}
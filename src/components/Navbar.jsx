import React from 'react';
import {
  FaBars,
  FaTimes
} from 'react-icons/fa';
import Logo from '../assets/logo.jpg';
import { useTranslation } from 'react-i18next';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const NavbarCatalan = ({nav, setNav}) => {
  const handleClick = () => setNav(!nav);
  const { t, i18n } = useTranslation();

  const isSpanish = false;

  return (
    <div className='fixed w-full h-[56px] flex justify-between items-center px-4 bg-[white] text-black font-lato font-thin text-lg'>
      <div>
        <Link to='/' className='flex items-center gap-4'>
          <img src={Logo} alt='Logo Image' className='w-16' />
          <span className='font-light title text-[15pt]'>{t('slogan')}</span>
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
        <CustomLink to='/blog'>Blog</CustomLink>
        <CustomLink to='/contacte'>{t('navbar.contacte')}</CustomLink>
        <li>
          <select
            className='bg-transparent border-none outline-none'
            onChange={toggleLang(i18n, isSpanish)}
          >
            <option value='ca'>CAT</option>
            <option value='es'>ESP</option>
          </select>
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
          <CustomLink onCLick={handleClick} to='/blog'>Blog</CustomLink>
        </li>
        <li className='text-4xl py-3'>
          <CustomLink onClick={handleClick} to='/contacte'>{t('navbar.contacte')}</CustomLink>
        </li>
        <li className='text-4xl py-3'>
          <select
            className='bg-transparent border-none outline-none'
            onChange={toggleLang(i18n, isSpanish)}
          >
            <option value='ca'>CAT</option>
            <option value='es'>ESP</option>
          </select>
        </li>
      </ul>
    </div>
  );
};

const NavbarSpanish = ({nav, setNav}) => {
  const handleClick = () => setNav(!nav);
  const { t, i18n } = useTranslation();

  const isSpanish = true;

  return (
    <div className='fixed w-full h-[56px] flex justify-between items-center px-4 bg-[white] text-black font-lato font-thin text-lg'>
      <div>
        <Link to='/' className='flex items-center gap-4'>
          <img src={Logo} alt='Logo Image' className='w-16' />
          <span className='font-light title text-[15pt]'>{t('slogan')}</span>
        </Link>
      </div>
      
      {/* menu */}
      <ul className='hidden xl:flex xl:items-center text-base font-light'>
        <CustomLink to='/'>{t('navbar.pagPrincipal')}</CustomLink>
        <CustomLink to='/qui-som'>{t('navbar.quiSom')}</CustomLink>
        <CustomLink to='/que-fem'>{t('navbar.queFem')}</CustomLink>
        <CustomLink to='/tours'>{t('navbar.tours')}</CustomLink>
        <CustomLink to='/allotjament'>{t('navbar.allotjament')}</CustomLink>
        <CustomLink to='/galeria'>{t('navbar.galeria')}</CustomLink>
        <CustomLink to='/que-cal-saber'>{t('navbar.queCalSaber')}</CustomLink>
        <CustomLink to='/blog'>Blog</CustomLink>
        <CustomLink to='/contacte'>{t('navbar.contacte')}</CustomLink>
        <li>
          <select
            className='bg-transparent border-none outline-none'
            onChange={toggleLang(i18n, isSpanish)}
          >
            <option value='es'>ESP</option>
            <option value='ca'>CAT</option>
          </select>
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
          <CustomLink onCLick={handleClick} to='/blog'>Blog</CustomLink>
        </li>
        <li className='text-4xl py-3'>
          <CustomLink onClick={handleClick} to='/contacte'>{t('navbar.contacte')}</CustomLink>
        </li>
        <li className='text-4xl py-3'>
          <select
            className='bg-transparent border-none outline-none'
            onChange={toggleLang(i18n, isSpanish)}
          >
            <option value='es'>ESP</option>
            <option value='ca'>CAT</option>
          </select>
        </li>
      </ul>
    </div>
  );
};

const Navbar = ({nav, setNav}) => {
  const { i18n } = useTranslation();

  if (i18n.language === 'es') {
    return <NavbarSpanish nav={nav} setNav={setNav} />
  } else {
    return <NavbarCatalan nav={nav} setNav={setNav} />
  }
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

const toggleLang = (i18n, isSpanish) => (e) => {
  i18n.changeLanguage(e.target.value);

  if (i18n.language === 'es') {
    isSpanish = true;
  } else {
    isSpanish = false;
  }
}
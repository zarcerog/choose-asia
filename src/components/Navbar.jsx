import React from 'react';
import {
  FaBars,
  FaTimes
} from 'react-icons/fa';
import Logo from '../assets/logo.jpg';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const Navbar = ({nav, setNav}) => {
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[56px] flex justify-between items-center px-4 bg-[white] text-black font-lato font-thin text-lg'>
      <div>
        <Link to='/' className='flex items-center gap-4'>
          <img src={Logo} alt='Logo Image' className='w-16' />
          <span className='font-light title text-[15pt]'>Viatge d'autor</span>
        </Link>
      </div>

      {/* menu */}
      <ul className='hidden xl:flex text-base font-light'>
        <CustomLink to='/'>Pàgina Principal</CustomLink>
        <CustomLink to='/qui-som'>Qui som</CustomLink>
        <CustomLink to='/la-idea'>La idea</CustomLink>
        <CustomLink to='/que-fem'>Què fem</CustomLink>
        <CustomLink to='/tours'>Tours</CustomLink>
        <CustomLink to='/allotjament'>Allotjament</CustomLink>
        <CustomLink to='/galeria'>Galeria</CustomLink>
        <CustomLink to='/que-cal-saber'>Què cal saber</CustomLink>
        <CustomLink to='/contacte'>Contacte</CustomLink>
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
          <CustomLink onClick={handleClick} to='/'>Pàgina Principal</CustomLink>
        </li>
        <li className='text-4xl py-3'>
          <CustomLink onClick={handleClick} to='/qui-som'>Qui som</CustomLink>
        </li>
        <li className='text-4xl py-3'>
          <CustomLink onClick={handleClick} to='/la-idea'>La idea</CustomLink>
        </li>
        <li className='text-4xl py-3'>
          <CustomLink onClick={handleClick} to='/que-fem'>Què fem</CustomLink>
        </li>
        <li className='text-4xl py-3'>
          <CustomLink onClick={handleClick} to='/tours'>Tours</CustomLink>
        </li>
        <li className='text-4xl py-3'>
          <CustomLink onClick={handleClick} to='/allotjament'>Allotjament</CustomLink>
        </li>
        <li className='text-4xl py-3'>
          <CustomLink onClick={handleClick} to='/galeria'>Galeria</CustomLink>
        </li>
        <li className='text-4xl py-3'>
          <CustomLink onClick={handleClick} to='/que-cal-saber'>Què cal saber</CustomLink>
        </li>
        <li className='text-4xl py-3'>
          <CustomLink onClick={handleClick} to='/contacte'>Contacte</CustomLink>
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

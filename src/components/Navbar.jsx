import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaLinkedinIn,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assets/logo.jpg';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const Navbar = () => {
  const [nav, setNav] = useState(false);
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
      <ul className='hidden md:flex text-base font-light text-[]'>
        <CustomLink to='/'>Pàgina Principal</CustomLink>
        <CustomLink to='/qui-som'>Qui som</CustomLink>
        <CustomLink to='/la-idea'>La idea</CustomLink>
        <CustomLink to='/que-fem'>Què fem</CustomLink>
        <CustomLink to='/tours'>Tours</CustomLink>
        <CustomLink to='/contact'>Allotjament</CustomLink>
        <CustomLink to='/contact'>Galeria</CustomLink>
        <CustomLink to='/'>Què cal saber</CustomLink>
        <CustomLink to='/contacte'>Contacte</CustomLink>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl'>
          <a href='/'>Home</a>
        </li>
        <li className='py-6 text-4xl'>
          <a href='/about'>About</a>
        </li>
        <li className='py-6 text-4xl'>
          <a href='/skills'>Skills</a>
        </li>
        <li className='py-6 text-4xl'>
          <a href='/work'>Work</a>
        </li>
        <li className='py-6 text-4xl'>
          <a href='/contact'>Contact</a>
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

export default Navbar;

"use client";

import { useState } from 'react';
import './Navbar.scss';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='flex justify-around items-center px-4 py-8 relative bg-[#043873] text-white'>
      <div className='text-2xl font-bold'>whitepace</div>
      <div className='desktopNavLinks'>
        <a href="/products">Products</a>
        <a href="/solutions">Solutions</a>
        <a href="/resources">Resources</a>
        <a href="/pricing">Pricing</a>
        <a href="/login"className='bg-[#f7dc92] text-black px-3 py-2 rounded'>Login</a>
        <a href="/trywhitepace" className='bg-[#588ff5] px-4 py-2 rounded' >Try Whitepace free →</a>
      </div>
      {/* Mobile Menu Toggle */}
      {/* <div className={setIsMenuOpen ? 'display: flex': 'display: None'}
        onClick={() => setIsMenuOpen(!isOpen)}
      >
        ☰
      </div> */}
      {/* Mobile Menu Overlay
      <div 
        className={` 
          ${isMenuOpen ? styles.active : ''}
        `}
      >
        <div>
          <Link 
            href="/products" 
            onClick={toggleMenu}
          >
            Products
          </Link>
          <Link 
            href="/solutions" 
            onClick={toggleMenu}
          >
            Solutions
          </Link>
          <Link 
            href="/resources" 
            onClick={toggleMenu}
          >
            Resources
          </Link>
          <Link 
            href="/pricing" 
            onClick={toggleMenu}
          >
            Pricing
          </Link>
          <Link 
            href="/login" 
            onClick={toggleMenu}
          >
            Login
          </Link>
        </div>
      </div> */}
    </nav>
  );
};

export default Navbar;
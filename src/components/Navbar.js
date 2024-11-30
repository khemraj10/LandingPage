"use client";

import { useState } from 'react';
import Link from 'next/link';
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
        <Link href="/products">Products</Link>
        <Link href="/solutions">Solutions</Link>
        <Link href="/resources">Resources</Link>
        <Link href="/pricing">Pricing</Link>
        <Link href="/login"className='bg-[#f7dc92] text-black px-3 py-2 rounded'>Login</Link>
        <Link href="/trywhitepace" className='bg-[#588ff5] px-4 py-2 rounded' >Try Whitepace free →</Link>
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
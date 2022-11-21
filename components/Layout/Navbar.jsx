import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [clientWindowHeight, setClientWindowHeight] = useState('');

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <nav className="fixed top-10 left-0 z-50 w-full h-16 flex justify-center items-center">
      <div className="container h-full max-w-7xl bg-white opacity-90 rounded-full shadow-lg flex justify-between items-center px-6">
        <div className="flex items-center gap-1">
          <img src="/logo.svg" />
          <h1 className="text-black font-semibold text-xl ">DEVFolio</h1>
        </div>
        <div className="flex gap-8 justify-center items-center">
          <p className='hover:underline cursor-pointer'>How it works</p>
          <Link href="/auth/login">
            <button className="btn btn-sm">Login</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

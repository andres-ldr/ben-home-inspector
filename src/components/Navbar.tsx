import Image from 'next/image';
import React from 'react';

const Navbar = () => {
  return (
    <header className='w-full shadow-md py-2 fixed top-0 inset-x-0 bg-slate-100 text-slate-800 z-50'>
      <nav className='max-w-[80%] mx-auto flex justify-between items-center gap-10'>
        <Image src='/golden_logo.png' alt='Logo' width={30} height={30} className='w-10 h-10 md:w-16 md:h-16' />
        <div className='hidden xl:flex font-semibold'>
          <a
            href='#'
            className='px-4 py-2 w-32 transition duration-300 ease-in-out text-center hover:bg-slate-800 hover:text-slate-100'
          >
            Home
          </a>
          <a
            href='#about'
            className='px-4 py-2 w-32 transition duration-300 ease-in-out text-center hover:bg-slate-800 hover:text-slate-100'
          >
            About
          </a>
          <a
            href='#services'
            className='px-4 py-2 w-32 transition duration-300 ease-in-out text-center hover:bg-slate-800 hover:text-slate-100'
          >
            Services
          </a>
          <a
            href='#pricing'
            className='px-4 py-2 w-32 transition duration-300 ease-in-out text-center hover:bg-slate-800 hover:text-slate-100'
          >
            Pricing
          </a>
          <a
            href='#contact'
            className='px-4 py-2 w-32 transition duration-300 ease-in-out text-center hover:bg-slate-800 hover:text-slate-100'
          >
            Contact
          </a>
        </div>
        <div className='hidden xl:flex flex-col gap-1 font-semibold'>
          <a
            href='#'
            className='hover:text-red-600 transition duration-300 ease-in-out'
          >
            contact@email.com
          </a>
          <a
            href='#'
            className='hover:text-red-600 transition duration-300 ease-in-out'
          >
            +1 123 456 789
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

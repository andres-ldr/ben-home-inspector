import Image from 'next/image';
import React from 'react';

const Navbar = () => {
  return (
    <header className='w-full shadow-md py-2 fixed top-0 inset-x-0 bg-slate-100 text-slate-800 z-50'>
      <nav className='max-w-[80%] mx-auto flex justify-between items-center gap-10'>
        <Image src='/logo.svg' alt='Logo' width={30} height={30} />
        <div className='flex font-semibold'>
          <a
            href='#'
            className='px-4 py-2 w-32 transition duration-300 ease-in-out text-center hover:bg-slate-800 hover:text-slate-100'
          >
            Link 1
          </a>
          <a
            href='#'
            className='px-4 py-2 w-32 transition duration-300 ease-in-out text-center hover:bg-slate-800 hover:text-slate-100'
          >
            Link 2
          </a>
          <a
            href='#'
            className='px-4 py-2 w-32 transition duration-300 ease-in-out text-center hover:bg-slate-800 hover:text-slate-100'
          >
            Link 3
          </a>
          <a
            href='#'
            className='px-4 py-2 w-32 transition duration-300 ease-in-out text-center hover:bg-slate-800 hover:text-slate-100'
          >
            Link 4
          </a>
          <a
            href='#'
            className='px-4 py-2 w-32 transition duration-300 ease-in-out text-center hover:bg-slate-800 hover:text-slate-100'
          >
            Link 5
          </a>
        </div>
        <div className='flex flex-col gap-1 font-semibold'>
          <a href='#'>contact@email.com</a>
          <a href='#'>+1 123 456 789</a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

import Image from 'next/image';
import React from 'react';

const Navbar = () => {
  return (
    <header className='w-full shadow-md py-2 fixed top-0 inset-x-0 bg-slate-100 text-slate-800 z-50'>
      <nav className='max-w-[80%] mx-auto flex justify-between items-center gap-10'>
        <Image
          src='/golden_logo.png'
          alt='Logo'
          width={30}
          height={30}
          className='w-10 h-10 md:w-16 md:h-16'
        />
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
        <div className='flex flex-col gap-2 text-sm'>
          <div className='items-center justify-end font-bold flex gap-4'>
            <div className='w-4 h-4'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 512 512'
                className='fill-slate-900 w-full h-full object-cover'
              >
                <path d='M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z' />
              </svg>
            </div>
            <span> +1 (778) 628 9777 </span>
          </div>
          <div className='items-center justify-end font-bold flex gap-4'>
            <div className='w-4 h-4'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 512 512'
                className='fill-slate-900 w-full h-full object-cover'
              >
                <path d='M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z' />
              </svg>
            </div>
            <span>benshad3@gmail.com</span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

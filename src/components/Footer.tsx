import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className='bg-slate-800 text-slate-100'>
      <div className='max-w-[80%] mx-auto py-24 flex flex-col justify-between gap-5'>
        <div className='flex flex-col gap-4 md:flex-row xl:justify-evenly'>
          <div className='flex flex-col gap-5 md:w-1/4'>
            <div className='flex items-center'>
              <Image src='/golden_logo.png' width={50} height={50} alt='logo' />
              <span className='text-2xl font-semibold'>About Ben</span>
            </div>
            <p>
              We have helped hundreds of families across Vancouver area achieve
              the dream of homeownership, We have built a good name for
              providing honest , top quality service to our clients.
            </p>
          </div>
          <div className='flex flex-col gap-5'>
            <span className='text-2xl font-semibold'>Quick links</span>
            <div className='flex flex-col gap-2'>
              <a href='#' className='hover:text-red-600 transition'>
                Home
              </a>
              <a href='#about' className='hover:text-red-600 transition'>
                About
              </a>
              <a href='#services' className='hover:text-red-600 transition'>
                Services
              </a>
              <a href='#contact' className='hover:text-red-600 transition'>
                Contact
              </a>
            </div>
          </div>
          <div className='flex flex-col gap-5'>
            <span className='text-2xl font-semibold'>Contact</span>
            <div className='flex flex-col gap-2'>
              <div className='font-bold flex gap-4'>
                <div className='w-4 h-4'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 512 512'
                    className='fill-slate-100 w-full h-full object-cover'
                  >
                    <path d='M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z' />
                  </svg>
                </div>
                <span> +1 (778) 628 9777 </span>
              </div>
              <div className='font-bold flex gap-4'>
                <div className='w-4 h-4'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 512 512'
                    className='fill-slate-100 w-full h-full object-cover'
                  >
                    <path d='M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z' />
                  </svg>
                </div>
                <span>benshad3@gmail.com</span>
              </div>
              <span>From Monday to Friday, 8:00 am - 19:00 pm</span>
            </div>
          </div>
        </div>
      </div>
      <div className='  bg-slate-950'>
        <div className='max-w-[80%] mx-auto flex flex-col md:flex-row justify-evenly py-2'>
          <span className=''>&copy; 2024</span>
          <span className=''>Privacy Policy</span>
          <span className=''>Terms of Service</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

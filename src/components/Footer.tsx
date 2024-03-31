import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className='bg-slate-800 text-slate-100'>
      <div className='max-w-[80%] mx-auto py-24 flex flex-col justify-between gap-5'>
        <div className='flex justify-evenly'>
          <div className='w-72 flex flex-col gap-5'>
            <Image src='/logo.svg' width={50} height={50} alt='logo' />
            <span className='text-2xl font-semibold'>About Ben</span>
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
              <span>123-456-7890</span>
              <span>contact@email.com</span>
              <span>From Monday to Friday, 8:00 am - 19:00 pm</span>
            </div>
          </div>
        </div>
      </div>
      <div className='  bg-slate-950'>
        <div className='max-w-[80%] mx-auto flex justify-between'>
          <span className=''>&copy; 2021</span>
          <span className=''>Privacy Policy</span>
          <span className=''>Terms of Service</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

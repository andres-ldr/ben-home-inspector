import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-slate-800 text-slate-100'>
      <div className='max-w-[80%] mx-auto py-24 flex flex-col justify-between gap-5'>
        <div className='flex justify-between gap-5'>
          <div className='w-52 flex flex-col gap-5'>
            <span className='text-2xl font-semibold'>About Ben</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              quisquam dignissimos architecto quidem eum? Nulla iure corporis
              esse rem voluptates
            </p>
          </div>
          <div className='flex flex-col gap-5'>
            <span className='text-2xl font-semibold'>Links</span>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className='flex flex-col gap-5'>
            <span className='text-2xl font-semibold'>Contact</span>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
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

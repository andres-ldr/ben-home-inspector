import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import React from 'react';
import Image from 'next/image';
import Card from '@/components/Card';
import Table from '@/components/Table';

const Home = () => {
  return (
    <main>
      <Hero />
      <section
        className='max-w-[80%] mx-auto h-[45rem] flex justify-center gap-6
      '
      >
        <div className='bg-slate-100 w-72 h-80 -translate-y-20 flex flex-col items-center py-4 px-8 gap-10 shadow-md'>
          <Image src='/logo.svg' alt='Logo' width={30} height={30} />
          <span className='text-xl font-semibold'>Quality of Service</span>
          <p className='text-sm'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
            deleniti corrupti quaerat consequuntur facere quia quam magnam, in
            nisi optio quisquam, vero laudantium veritatis, cupiditate autem?
            Quo nesciunt dolore velit?
          </p>
        </div>
        <div className='bg-slate-100 w-72 h-80 -translate-y-20 flex flex-col items-center py-4 px-8 gap-10 shadow-md'>
          <Image src='/logo.svg' alt='Logo' width={30} height={30} />
          <span className='text-xl font-semibold'>Quality of Service</span>
          <p className='text-sm'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
            deleniti corrupti quaerat consequuntur facere quia quam magnam, in
            nisi optio quisquam, vero laudantium veritatis, cupiditate autem?
            Quo nesciunt dolore velit?
          </p>
        </div>
        <div className='bg-slate-100 w-72 h-80 -translate-y-20 flex flex-col items-center py-4 px-8 gap-10 shadow-md'>
          <Image src='/logo.svg' alt='Logo' width={30} height={30} />
          <span className='text-xl font-semibold'>Quality of Service</span>
          <p className='text-sm'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
            deleniti corrupti quaerat consequuntur facere quia quam magnam, in
            nisi optio quisquam, vero laudantium veritatis, cupiditate autem?
            Quo nesciunt dolore velit?
          </p>
        </div>
      </section>
      <section className='bg-slate-400'>
        <div className='max-w-[80%] mx-auto flex justify-center gap-10'>
          <div className='-translate-y-32 flex flex-col gap-5'>
            <Image
              src='/portrait.jpeg'
              alt='Home Inspection'
              width={400}
              height={400}
              className='shadow-md'
            />
            <div className='text-lg flex gap-10 items-center font-bold'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 512 512'
                className='w-10 h-10'
              >
                <path d='M211 7.3C205 1 196-1.4 187.6 .8s-14.9 8.9-17.1 17.3L154.7 80.6l-62-17.5c-8.4-2.4-17.4 0-23.5 6.1s-8.5 15.1-6.1 23.5l17.5 62L18.1 170.6c-8.4 2.1-15 8.7-17.3 17.1S1 205 7.3 211l46.2 45L7.3 301C1 307-1.4 316 .8 324.4s8.9 14.9 17.3 17.1l62.5 15.8-17.5 62c-2.4 8.4 0 17.4 6.1 23.5s15.1 8.5 23.5 6.1l62-17.5 15.8 62.5c2.1 8.4 8.7 15 17.1 17.3s17.3-.2 23.4-6.4l45-46.2 45 46.2c6.1 6.2 15 8.7 23.4 6.4s14.9-8.9 17.1-17.3l15.8-62.5 62 17.5c8.4 2.4 17.4 0 23.5-6.1s8.5-15.1 6.1-23.5l-17.5-62 62.5-15.8c8.4-2.1 15-8.7 17.3-17.1s-.2-17.4-6.4-23.4l-46.2-45 46.2-45c6.2-6.1 8.7-15 6.4-23.4s-8.9-14.9-17.3-17.1l-62.5-15.8 17.5-62c2.4-8.4 0-17.4-6.1-23.5s-15.1-8.5-23.5-6.1l-62 17.5L341.4 18.1c-2.1-8.4-8.7-15-17.1-17.3S307 1 301 7.3L256 53.5 211 7.3z' />
              </svg>
              <span># 123 456</span>
            </div>
          </div>
          <div className='w-1/2 flex flex-col gap-10 py-24'>
            <div>
              <h2 className='font-semibold'>About Ben</h2>
              <h2 className='text-4xl font-semibold'>About Ben</h2>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod,
              fuga enim. Sint, minima ducimus sit optio animi blanditiis quae
              omnis! Sit voluptatem ratione ducimus itaque exercitationem
              tempora repellendus vel debitis.
            </p>
          </div>
        </div>
      </section>
      <section className='bg-cityView bg-center bg-no-repeat bg-cover h-96 flex justify-center items-center'>
        <span className='text-4xl text-slate-100 font-semibold w-1/2 text-center'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </span>
      </section>
      <section className='py-24 max-w-[80%] mx-auto flex flex-col items-center gap-24'>
        <div className='flex flex-col items-center justify-center gap-5'>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
          <h2 className='text-5xl font-bold'>Services</h2>
        </div>
        <div className='flex'>
          <Card />
          <Card />
          <Card />
        </div>
      </section>
      <section className='py-24 max-w-[80%] mx-auto flex flex-col items-center gap-24'>
        <div className='flex flex-col items-center justify-center gap-5'>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
          <h2 className='text-5xl font-bold'>Pricing</h2>
        </div>
        <Table />
      </section>
      <section className='bg-cityView bg-center bg-no-repeat bg-cover h-96 flex justify-center items-center'>
        <span className='text-4xl text-slate-100 font-semibold w-1/2 text-center'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </span>
      </section>
      <section className='py-24'>
        <div className='w-[55rem] mx-auto h-96 bg-slate-100 shadow-lg rounded-lg flex'>
          <div className='w-1/2 h-full bg-simpleHome bg-cover bg-center bg-no-repeat'></div>
          <div className='flex flex-col py-4 px-8 gap-10'>
            <h3 className='text-4xl font-bold'>Contact Me</h3>
            <div className='flex gap-10 mt-10'>
              <Image src='/logo.svg' alt='Logo' width={30} height={30} />
              <span className='text-xl font-semibold'>+1 123 456 789</span>
            </div>
            <div className='flex gap-10'>
              <Image src='/logo.svg' alt='Logo' width={30} height={30} />
              <span className='text-xl font-semibold'>contact@email.com</span>
            </div>
            <span className='text-xl font-semibold'>
              Monday to Friday, from 8:00 to 19:00
            </span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;

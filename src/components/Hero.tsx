'use client';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className='relative w-screen h-screen flex justify-start items-center'>
      <Image
        src='/hero_image.jpg'
        alt='hero'
        layout='fill'
        objectFit='cover'
        className='absolute inset-0 w-full h-full'
      />
      <div className='absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-75'></div>
      <div className='w-full max-w-[80%] mx-auto z-20'>
        <div className='md:w-1/2  flex flex-col gap-10'>
          <motion.h1
            className='text-2xl xl:text-6xl text-white font-bold'
            animate={{
              y: 0,
              opacity: 1,
            }}
            initial={{
              y: 100,
              opacity: 0,
            }}
            transition={{
              duration: 0.5,
            }}
          >
            Ben Home Inspection Inc.
          </motion.h1>
          <motion.p
            className='text-white font-semibold md:text-xl'
            animate={{
              y: 0,
              opacity: 1,
            }}
            initial={{
              y: 100,
              opacity: 0,
            }}
            transition={{
              duration: 1,
            }}
          >
            We have helped hundreds of families across Vancouver area achieve
            the dream of homeownership, We have built a good name for providing
            honest , top quality service to our clients.
          </motion.p>
          <motion.a
            href='#services'
            className='py-2 px-4 bg-emerald-600 flex justify-center w-full sm:w-52 font-semibold text-white rounded-md hover:bg-emerald-500'
            animate={{
              y: 0,
              opacity: 1,
            }}
            initial={{
              y: 100,
              opacity: 0,
            }}
            transition={{
              duration: 1,
            }}
          >
            Check Our Services
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React from 'react';

const Hero = () => {
  return (
    <section className='bg-heroImage bg-center bg-cover bg-no-repeat w-screen h-screen flex justify-start items-center'>
      <div className='w-full max-w-[80%] mx-auto'>
        <div className='w-1/2  flex flex-col gap-10'>
          <h1 className='text-6xl text-white font-bold'>
            Ben Home Inspection Inc.
          </h1>
          <p className='text-white font-semibold text-xl'>
            We have helped hundreds of families across Vancouver area achieve
            the dream of homeownership, We have built a good name for providing
            honest , top quality service to our clients.
          </p>
          <a
            href='#services'
            className='py-2 px-4 bg-blue-600 flex justify-center w-52 font-semibold text-white rounded-md hover:bg-blue-500 transition duration-300 ease-in-out'
          >
            Check Our Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

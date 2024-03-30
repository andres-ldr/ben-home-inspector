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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            quo dicta harum dolore quod voluptatum sunt. Debitis officia earum,
            delectus at, iste magni culpa modi sed iusto exercitationem, eveniet
            numquam.
          </p>
          <a
            href='#'
            className='py-2 px-4 bg-blue-600 flex justify-center w-32 font-semibold text-white rounded-md hover:bg-blue-500 transition duration-300 ease-in-out'
          >
            More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

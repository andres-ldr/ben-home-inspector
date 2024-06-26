import React from 'react';

interface CardProps {
  title: string;
  description: string;
}

const Card = ({ title, description }: CardProps) => {
  return (
    <div className='cursor-pointer w-[20rem] h-[30rem] bg-simpleHome bg-no-repeat bg-center bg-cover shadow-2xl flex flex-col items-center justify-end py-6 px-4 text-slate-100 text-center transition-all duration-300 ease-in-out hover:w-full'>
      <span className='text-3xl  font-semibold'>Service 1</span>
      <span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
      </span>
    </div>
  );
};

export default Card;

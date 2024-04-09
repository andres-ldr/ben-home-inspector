import Hero from '@/components/Hero';
import React from 'react';
import Image from 'next/image';
import Table from '@/components/Table';

const Home = () => {
  return (
    <main>
      <Hero />
      <section
        className='max-w-[80%] mx-auto sm:h-[30rem] flex flex-col sm:flex-row justify-center items-center sm:items-start gap-6 py-24
      '
      >
        <div className='bg-slate-100 sm:w-72 sm:h-80 sm:-translate-y-44 flex flex-col justify-start items-center py-4 px-8 gap-4 shadow-md text-center'>
          <div className='w-10 h-10'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 384 512'
              className='fill-green-600 object-cover w-full h-full'
            >
              <path d='M173.8 5.5c11-7.3 25.4-7.3 36.4 0L228 17.2c6 3.9 13 5.8 20.1 5.4l21.3-1.3c13.2-.8 25.6 6.4 31.5 18.2l9.6 19.1c3.2 6.4 8.4 11.5 14.7 14.7L344.5 83c11.8 5.9 19 18.3 18.2 31.5l-1.3 21.3c-.4 7.1 1.5 14.2 5.4 20.1l11.8 17.8c7.3 11 7.3 25.4 0 36.4L366.8 228c-3.9 6-5.8 13-5.4 20.1l1.3 21.3c.8 13.2-6.4 25.6-18.2 31.5l-19.1 9.6c-6.4 3.2-11.5 8.4-14.7 14.7L301 344.5c-5.9 11.8-18.3 19-31.5 18.2l-21.3-1.3c-7.1-.4-14.2 1.5-20.1 5.4l-17.8 11.8c-11 7.3-25.4 7.3-36.4 0L156 366.8c-6-3.9-13-5.8-20.1-5.4l-21.3 1.3c-13.2 .8-25.6-6.4-31.5-18.2l-9.6-19.1c-3.2-6.4-8.4-11.5-14.7-14.7L39.5 301c-11.8-5.9-19-18.3-18.2-31.5l1.3-21.3c.4-7.1-1.5-14.2-5.4-20.1L5.5 210.2c-7.3-11-7.3-25.4 0-36.4L17.2 156c3.9-6 5.8-13 5.4-20.1l-1.3-21.3c-.8-13.2 6.4-25.6 18.2-31.5l19.1-9.6C65 70.2 70.2 65 73.4 58.6L83 39.5c5.9-11.8 18.3-19 31.5-18.2l21.3 1.3c7.1 .4 14.2-1.5 20.1-5.4L173.8 5.5zM272 192a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM1.3 441.8L44.4 339.3c.2 .1 .3 .2 .4 .4l9.6 19.1c11.7 23.2 36 37.3 62 35.8l21.3-1.3c.2 0 .5 0 .7 .2l17.8 11.8c5.1 3.3 10.5 5.9 16.1 7.7l-37.6 89.3c-2.3 5.5-7.4 9.2-13.3 9.7s-11.6-2.2-14.8-7.2L74.4 455.5l-56.1 8.3c-5.7 .8-11.4-1.5-15-6s-4.3-10.7-2.1-16zm248 60.4L211.7 413c5.6-1.8 11-4.3 16.1-7.7l17.8-11.8c.2-.1 .4-.2 .7-.2l21.3 1.3c26 1.5 50.3-12.6 62-35.8l9.6-19.1c.1-.2 .2-.3 .4-.4l43.2 102.5c2.2 5.3 1.4 11.4-2.1 16s-9.3 6.9-15 6l-56.1-8.3-32.2 49.2c-3.2 5-8.9 7.7-14.8 7.2s-11-4.3-13.3-9.7z' />
            </svg>
          </div>
          <span className='text-xl font-semibold'>Quality of Service</span>
          <p className='text-sm'>
            Customer service, delivered with the highest professionalism and
            integrity.
          </p>
        </div>
         <div className='bg-slate-100 sm:w-72 sm:h-80 sm:-translate-y-44 flex flex-col justify-start items-center py-4 px-8 gap-4 shadow-md text-center'>
          <div className='w-10 h-10'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 512 512'
              className='fill-green-600 w-full h-full object-cover'
            >
              <path d='M152.1 38.2c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 113C-2.3 103.6-2.3 88.4 7 79s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zm0 160c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 273c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zM224 96c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-17.7 0-32-14.3-32-32zM160 416c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H192c-17.7 0-32-14.3-32-32zM48 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96z' />
            </svg>
          </div>
          <span className='text-xl font-semibold'>Expert Technical Advice</span>
          <p className='text-sm'>
            With specialized knowledge in all type of mechanical systems
          </p>
        </div>
        <div className='bg-slate-100 sm:w-72 sm:h-80 sm:-translate-y-44 flex flex-col justify-start items-center py-4 px-8 gap-4 shadow-md text-center'>
          <div className='w-10 h-10'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 576 512'
              className='w-full h-full object-cover fill-green-600 '
            >
              <path d='M312 24V34.5c6.4 1.2 12.6 2.7 18.2 4.2c12.8 3.4 20.4 16.6 17 29.4s-16.6 20.4-29.4 17c-10.9-2.9-21.1-4.9-30.2-5c-7.3-.1-14.7 1.7-19.4 4.4c-2.1 1.3-3.1 2.4-3.5 3c-.3 .5-.7 1.2-.7 2.8c0 .3 0 .5 0 .6c.2 .2 .9 1.2 3.3 2.6c5.8 3.5 14.4 6.2 27.4 10.1l.9 .3c11.1 3.3 25.9 7.8 37.9 15.3c13.7 8.6 26.1 22.9 26.4 44.9c.3 22.5-11.4 38.9-26.7 48.5c-6.7 4.1-13.9 7-21.3 8.8V232c0 13.3-10.7 24-24 24s-24-10.7-24-24V220.6c-9.5-2.3-18.2-5.3-25.6-7.8c-2.1-.7-4.1-1.4-6-2c-12.6-4.2-19.4-17.8-15.2-30.4s17.8-19.4 30.4-15.2c2.6 .9 5 1.7 7.3 2.5c13.6 4.6 23.4 7.9 33.9 8.3c8 .3 15.1-1.6 19.2-4.1c1.9-1.2 2.8-2.2 3.2-2.9c.4-.6 .9-1.8 .8-4.1l0-.2c0-1 0-2.1-4-4.6c-5.7-3.6-14.3-6.4-27.1-10.3l-1.9-.6c-10.8-3.2-25-7.5-36.4-14.4c-13.5-8.1-26.5-22-26.6-44.1c-.1-22.9 12.9-38.6 27.7-47.4c6.4-3.8 13.3-6.4 20.2-8.2V24c0-13.3 10.7-24 24-24s24 10.7 24 24zM568.2 336.3c13.1 17.8 9.3 42.8-8.5 55.9L433.1 485.5c-23.4 17.2-51.6 26.5-80.7 26.5H192 32c-17.7 0-32-14.3-32-32V416c0-17.7 14.3-32 32-32H68.8l44.9-36c22.7-18.2 50.9-28 80-28H272h16 64c17.7 0 32 14.3 32 32s-14.3 32-32 32H288 272c-8.8 0-16 7.2-16 16s7.2 16 16 16H392.6l119.7-88.2c17.8-13.1 42.8-9.3 55.9 8.5zM193.6 384l0 0-.9 0c.3 0 .6 0 .9 0z' />
            </svg>
          </div>
          <span className='text-xl font-semibold'>Best price</span>
          <p className='text-sm '>
            Affordable prices for the best service in the industry
          </p>
        </div>
      </section>
      <section className='bg-slate-300 max-sm:py-24'>
        <div className='max-w-[80%] mx-auto flex flex-col sm:flex-row justify-center gap-10 sm:gap-10'>
          <div className='relative sm:-translate-y-32 flex flex-col'>
            <Image
              id='about'
              src='/portrait.jpeg'
              alt='Home Inspection'
              width={400}
              height={400}
              className='z-10'
            />
            <div className='text-lg flex py-4 px-16 gap-5 justify-center items-center bg-slate-900 text-slate-100 font-bold rounded z-10'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 512 512'
                className='w-10 h-10 fill-yellow-400'
              >
                <path d='M211 7.3C205 1 196-1.4 187.6 .8s-14.9 8.9-17.1 17.3L154.7 80.6l-62-17.5c-8.4-2.4-17.4 0-23.5 6.1s-8.5 15.1-6.1 23.5l17.5 62L18.1 170.6c-8.4 2.1-15 8.7-17.3 17.1S1 205 7.3 211l46.2 45L7.3 301C1 307-1.4 316 .8 324.4s8.9 14.9 17.3 17.1l62.5 15.8-17.5 62c-2.4 8.4 0 17.4 6.1 23.5s15.1 8.5 23.5 6.1l62-17.5 15.8 62.5c2.1 8.4 8.7 15 17.1 17.3s17.3-.2 23.4-6.4l45-46.2 45 46.2c6.1 6.2 15 8.7 23.4 6.4s14.9-8.9 17.1-17.3l15.8-62.5 62 17.5c8.4 2.4 17.4 0 23.5-6.1s8.5-15.1 6.1-23.5l-17.5-62 62.5-15.8c8.4-2.1 15-8.7 17.3-17.1s-.2-17.4-6.4-23.4l-46.2-45 46.2-45c6.2-6.1 8.7-15 6.4-23.4s-8.9-14.9-17.3-17.1l-62.5-15.8 17.5-62c2.4-8.4 0-17.4-6.1-23.5s-15.1-8.5-23.5-6.1l-62 17.5L341.4 18.1c-2.1-8.4-8.7-15-17.1-17.3S307 1 301 7.3L256 53.5 211 7.3z' />
              </svg>
              <span>License: # 83543</span>
            </div>
          </div>
          <div className='sm:w-1/2 flex flex-col gap-10 sm:py-48'>
            <div>
              <h2 className='font-semibold text-green-900'>Ben Shadbakht</h2>
              <h2 className='text-4xl font-semibold'>About Ben</h2>
            </div>
            <p>
              Our Home Inspections are fully insured and trained and registered
              in accordance with the Canadian Association of Home and Property
              Inspections. And the customer Protection BC.
            </p>
          </div>
        </div>
      </section>
      <section className='bg-familyBg bg-center bg-no-repeat bg-cover h-[35rem] flex justify-center items-center'>
        <span className='text-3xl md:text-4xl text-slate-100 font-semibold w-1/2 text-center leading-snug'>
          Buying a house is a big decision, make it rigth with Ben
        </span>
      </section>
      <section
        id='services'
        className='py-32 max-w-[80%] mx-auto flex flex-col justify-center items-center gap-32'
      >
        <div className='flex flex-col items-center gap-2'>
          <span className='text-green-900 font-bold'>
            The best prices for the best service
          </span>
          <h2 className='text-5xl font-bold'>Our Services</h2>
        </div>
        <div className='flex flex-col md:flex-row justify-center gap-10'>
          <div className='h-60 md:w-80 md:h-80'>
            <Image
              src='/condo1.jpg'
              alt='townhouse'
              width={200}
              height={200}
              className='shadow-xl h-full w-full object-cover'
            />
          </div>
          <div className='flex flex-col md:w-1/2 gap-10'>
            <h3 className='text-3xl font-bold'>Condo Inspection</h3>
            <p>
              The comprehensive service package encompasses a thorough
              examination of the suite along with an assessment of the condition
              of the accessible communal areas.
            </p>
            <p>
              The communal spaces within condominium complexes pose significant
              challenges and potential costs for upkeep. These encompass various
              elements such as exterior walls, roofs, parking facilities, and
              mechanical systems. Factors like the building&apos;s age,
              architectural design, construction standards, and maintenance
              track record collectively influence its overall state.
            </p>
            <ul className='flex flex-col gap-10'>
              <li className='flex gap-4 items-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 448 512'
                  className='w-8 h-8 fill-green-600'
                >
                  <path d='M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z' />
                </svg>
                <span className='font-semibold w-full'>
                  Examined the interior of the condo for any visible damage
                </span>
              </li>
              <li className='flex gap-4 items-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 448 512'
                  className='w-8 h-8 fill-green-600'
                >
                  <path d='M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z' />
                </svg>
                <span className='font-semibold w-full'>
                  Inspection of the safety features such as smoke detectors,
                  carbon monoxide detectors, and fire extinguishers
                </span>
              </li>
              <li className='flex gap-4 items-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 448 512'
                  className='w-8 h-8 fill-green-600'
                >
                  <path d='M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z' />
                </svg>
                <span className='font-semibold w-full'>
                  Inspection of common areas and shared building systems such as
                  elevators, hallways and stairwells
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className='flex flex-col md:flex-row justify-center gap-10'>
          <div className='w-full h-60 md:hidden'>
            <Image
              src='/townhouse1.jpg'
              alt='townhouse-inspection'
              width={400}
              height={400}
              className='w-full h-full object-cover shadow-xl'
            />
          </div>
          <div className='flex flex-col md:w-1/2 gap-10'>
            <h3 className='text-3xl font-bold'>Townhouse Inspection</h3>
            <p>
              An inspection is a meticulous assessment conducted to evaluate the
              structural integrity, safety, and overall condition of a townhouse
              property. It involves a comprehensive examination of both the
              interior and exterior components of the townhouse, aiming to
              identify any existing issues or potential problems that may
              require attention.
            </p>
            <ul className='flex flex-col gap-5'>
              <li className='flex gap-4 items-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 448 512'
                  className='w-8 h-8 fill-green-600'
                >
                  <path d='M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z' />
                </svg>
                <span className='font-semibold w-full'>
                  Inspect the structural elements such as: walls, ceilings,
                  floors and roofs.
                </span>
              </li>
              <li className='flex gap-4 items-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 448 512'
                  className='w-8 h-8 fill-green-600'
                >
                  <path d='M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z' />
                </svg>
                <span className='font-semibold w-full'>
                  The exterior of the townhouse, including siding, windows,
                  doors, decks, balconies, and landscaping features
                </span>
              </li>
              <li className='flex gap-4 items-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 448 512'
                  className='w-8 h-8 fill-green-600'
                >
                  <path d='M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z' />
                </svg>
                <span className='font-semibold w-full'>
                  Assessesment of the functioning and condition of the HVAC
                  systems, plumbing, electrical wiring, and any other mechanical
                  systems
                </span>
              </li>
              <li className='flex gap-4 items-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 448 512'
                  className='w-8 h-8 fill-green-600'
                >
                  <path d='M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z' />
                </svg>
                <span className='font-semibold w-full'>
                  The interior of the townhouse, including rooms, bathrooms,
                  kitchen, and living areas
                </span>
              </li>
            </ul>
          </div>
          <div className='hidden md:flex md:w-80 md:h-80'>
            <Image
              src='/townhouse1.jpg'
              alt='townhouse-inspection'
              width={400}
              height={400}
              className='w-full h-full object-cover shadow-xl'
            />
          </div>
        </div>
        <div className='flex flex-col md:flex-row justify-center gap-10'>
          <div className='h-60 md:w-80 md:h-80'>
            <Image
              src='/home.jpg'
              alt='house-inspection'
              width={400}
              height={400}
              className='w-full h-full object-cover shadow-xl'
            />
          </div>

          <div className='flex flex-col md:w-1/2 gap-10'>
            <h3 className='text-3xl font-bold'>House Inspection</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
              itaque cupiditate dolor numquam distinctio laboriosam consectetur
              ipsum reiciendis soluta aliquam sit ipsa quibusdam non quod
              accusamus incidunt quas quos et.
            </p>
            <ul className='flex flex-col gap-5'>
              <li className='flex gap-4 items-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 448 512'
                  className='w-8 h-8 fill-green-600'
                >
                  <path d='M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z' />
                </svg>
                <span className='font-semibold'>
                  Structural integrity inspection
                </span>
              </li>
              <li className='flex gap-4 items-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 448 512'
                  className='w-8 h-8 fill-green-600'
                >
                  <path d='M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z' />
                </svg>
                <span className='font-semibold w-full'>
                  Interior and exterior inspection to identify major issues
                </span>
              </li>
              <li className='flex gap-4 items-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 448 512'
                  className='w-8 h-8 fill-green-600'
                >
                  <path d='M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z' />
                </svg>
                <span className='font-semibold w-full'>
                  Inspection of the electrical system
                </span>
              </li>
              <li className='flex gap-4 items-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 448 512'
                  className='w-8 h-8 fill-green-600'
                >
                  <path d='M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z' />
                </svg>
                <span className='font-semibold w-full'>
                  Assesment about the plumbing system
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section id='pricing' className='py-24 bg-slate-300'>
        <div className='max-w-[80%] mx-auto flex flex-col items-center gap-24'>
          <div className='flex flex-col items-center justify-center gap-5 text-center'>
            <span className='text-green-900 font-bold'>
              The best prices for the best service
            </span>
            <h2 className='text-3xl md:text-5xl font-bold'>Pricing & Fees</h2>
          </div>
          <Table />
        </div>
      </section>
      <section className='bg-cityView bg-center bg-no-repeat bg-cover h-[35rem] flex justify-center items-center'>
        <span className='max-w-[80%] mx-auto text-2xl md:text-4xl text-slate-100 font-semibold md:w-1/2 text-center'>
          Rely on our thorough inspections to reveal all aspects, guaranteeing
          confidence in your forthcoming home purchase
        </span>
      </section>
      <section id='contact' className='py-24 max-w-[80%] mx-auto'>
        <div className='lg:w-8/12 mx-auto md:h-96 bg-slate-100 shadow-2xl rounded-lg flex'>
          <div className='md:w-1/2 h-full hidden md:flex'>
            <Image
              src='/blueprint2.jpg'
              alt='Contact'
              width={400}
              height={400}
              className='w-full h-full object-cover rounded-l-lg'
            />
          </div>
          <div className='flex flex-col py-8 px-10 gap-5'>
            <h3 className='text-2xl md:text-4xl font-bold'>Contact Me</h3>
            <div className='flex flex-wrap gap-5 mt-10'>
              <Image src='/phone.svg' alt='Logo' width={20} height={20} />
              <span className='md:text-xl font-semibold'>
                +1 (778) 628 9777
              </span>
            </div>
            <div className='flex flex-wrap gap-5'>
              <Image src='/envelope.svg' alt='Logo' width={20} height={20} />
              <span className='md:text-xl font-semibold'>
                benshad3@gmail.com
              </span>
            </div>
            <div className='flex flex-wrap gap-5'>
              <Image
                src='/location.svg'
                alt='Location'
                width={20}
                height={20}
              />
              <span className='md:text-xl font-semibold'>British Columbia</span>
            </div>
            <span className='md:text-xl font-semibold'>
              Monday to Friday, from 8:00 to 19:00
            </span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;

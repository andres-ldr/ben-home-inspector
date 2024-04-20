import React from 'react';

const Table = async () => {
  return (
    <>
      <table className='w-full'>
        <thead className='bg-slate-800 text-slate-100 text-sm md:text-xl'>
          <tr className=''>
            <th className='py-4'>Type of home</th>
            <th className='py-4'>Square Footage</th>
            <th className='py-4'>Fee</th>
          </tr>
        </thead>
        <tbody>
          <tr className='bg-slate-200 font-semibold border-b-2 text-center text-sm md:text-base '>
            <td className='py-6' rowSpan={2}>
              Condo
            </td>
            <td className='py-6'>Up to 1200 sqft</td>
            <td className='py-6'>$ 320.00</td>
          </tr>
          <tr className='bg-slate-200 font-semibold border-b-2 text-center text-sm md:text-base'>
            <td className='py-6'>Up to 2000 sqft</td>
            <td className='py-6'>$ 380.00</td>
          </tr>
          <tr className='bg-slate-200 font-semibold border-b-2 text-center text-sm md:text-base'>
            <td className='py-6' rowSpan={2}>
              Townhouse
            </td>
            <td className='py-6'>Up to 1500 sqft</td>
            <td className='py-6'>$ 420.00</td>
          </tr>
          <tr className='bg-slate-200  font-semibold border-b-2 text-center text-sm md:text-base'>
            <td className='py-6'>Up to 2000 sqft</td>
            <td className='py-6'>$ 480.00</td>
          </tr>
          <tr className='bg-slate-200 font-semibold border-b-2 text-center text-sm md:text-base'>
            <td className='py-6' rowSpan={3}>
              House
            </td>
            <td className='py-6'>Up to 2500 sqft</td>
            <td className='py-6'>$ 600.00</td>
          </tr>
          <tr className='bg-slate-200 font-semibold border-b-2 text-center text-sm md:text-base'>
            <td className='py-6'>Up to 3000 sqft</td>
            <td className='py-6'>$ 650.00</td>
          </tr>
          <tr className='bg-slate-200 font-semibold border-b-2 text-center text-sm md:text-base'>
            <td className='py-6'>Up to 3500 sqft</td>
            <td className='py-6'>$ 700.00</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Table;

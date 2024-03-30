import React from 'react';

const Table = () => {
  return (
    <table className='w-3/4'>
      <thead className='bg-slate-800 text-slate-100 text-xl'>
        <tr className=''>
          <th className='py-4'>Type of home</th>
          <th className='py-4'>Square Footage</th>
          <th className='py-4'>Fee</th>
        </tr>
      </thead>
      <tbody>
        <tr className='hover:bg-slate-300 transition duration-200 ease-in-out font-semibold border-b-2 text-center'>
          <td className='py-6'>Single Family Home</td>
          <td className='py-6'>0-2000</td>
          <td className='py-6'>$200</td>
        </tr>
        <tr className='hover:bg-slate-300 transition duration-200 ease-in-out font-semibold border-b-2 text-center'>
          <td className='py-6'>Single Family Home</td>
          <td className='py-6'>0-2000</td>
          <td className='py-6'>$200</td>
        </tr>
        <tr className='hover:bg-slate-300 transition duration-200 ease-in-out font-semibold border-b-2 text-center'>
          <td className='py-6'>Single Family Home</td>
          <td className='py-6'>0-2000</td>
          <td className='py-6'>$200</td>
        </tr>
        <tr className='hover:bg-slate-300 transition duration-200 ease-in-out font-semibold border-b-2 text-center'>
          <td className='py-6'>Single Family Home</td>
          <td className='py-6'>0-2000</td>
          <td className='py-6'>$200</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;

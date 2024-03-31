import React from 'react';
import { promises as fs } from 'fs';

type DataType = {
  type: string;
  footage: string;
  price: string;
};

const Table = async () => {
  const getFile = async () => {
    const file = await fs.readFile(
      process.cwd() + '/src/data/prices.json',
      'utf8'
    );
    return JSON.parse(file);
  };
  const { data } = await getFile();

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
        {data.map(({ type, footage, price }: DataType, i: number) => (
          <tr
            key={i}
            className='bg-slate-200 hover:bg-slate-300 transition duration-200 ease-in-out font-semibold border-b-2 text-center'
          >
            <td className='py-6'>{type}</td>
            <td className='py-6'>Up to {footage} sqft</td>
            <td className='py-6'>${price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;

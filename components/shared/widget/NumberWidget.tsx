import React from 'react';

type Props = { title: string; count: number };

function NumberWidget({ title, count }: Props) {
  return (
    <div
      className='flex flex-col items-center justify-center
    size-40 rounded-md p-5 text-center bg-[#FCD692] shadow-lg'
    >
      <p className='text-4xl font-semibold'>{count}</p>
      <h1 className='text-sm'>{title}</h1>
    </div>
  );
}

export default NumberWidget;

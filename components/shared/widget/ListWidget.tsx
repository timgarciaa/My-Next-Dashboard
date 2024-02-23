import { List } from '@/types';
import React from 'react';

type Props = { title: string; subtitle?: string; results: List[] };

function ListWidget({ title, subtitle, results }: Props) {
  return (
    <div className='flex flex-col w-full ' data-testid='widget'>
      <h1 className='text-xl font-semibold'>{title}</h1>
      <p className='text-sm mb-2'>{subtitle}</p>

      {results.map((result, idx: number) => (
        <li
          key={idx}
          className='hover:bg-sky-200 hover:rounded-lg p-1 cursor-pointer'
        >
          <a href={result.url} target='_blank' rel='noreferrer'>
            {result.name}
          </a>
        </li>
      ))}
    </div>
  );
}

export default ListWidget;

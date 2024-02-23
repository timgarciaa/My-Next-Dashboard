import React from 'react';

type Props = {
  title: string;
  subtitle?: string;
  type: string;
  api: string;
};

async function Widget({ title, subtitle, type, api }: Props) {
  const data = await fetch(api);
  const body = await data.json();

  const listWidget = () => (
    <div className='flex flex-col w-full '>
      <h1 className='text-xl font-semibold'>{title}</h1>
      <p className='text-sm mb-2'>{subtitle}</p>

      {body.results.map((result: any, idx: number) => (
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

  const numberWidget = () => {
    const count = body.pokemon_species_details.length;
    return (
      <div
        className='flex flex-col items-center justify-center
      size-40 rounded-md p-5 text-center bg-[#FCD692] shadow-lg'
      >
        <p className='text-4xl font-semibold'>{count}</p>
        <h1 className='text-sm'>{title}</h1>
      </div>
    );
  };

  if (type === 'list') {
    return listWidget();
  } else {
    return numberWidget();
  }
}

export default Widget;

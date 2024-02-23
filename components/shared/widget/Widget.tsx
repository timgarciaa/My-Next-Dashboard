import React from 'react';
import ListWidget from './ListWidget';
import NumberWidget from './NumberWidget';

type Props = {
  title: string;
  subtitle?: string;
  type: string;
  api: string;
};

async function Widget({ title, subtitle, type, api }: Props) {
  const data = await fetch(api);
  const body = await data.json();

  if (type === 'list') {
    return (
      <ListWidget title={title} subtitle={subtitle} results={body.results} />
    );
  } else {
    const count = body.pokemon_species_details.length;
    return <NumberWidget title={title} count={count} />;
  }
}

export default Widget;

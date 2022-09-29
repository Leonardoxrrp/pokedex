import React from 'react';
import Filters from '../../components/filters/Filters';
import Pokemons from '../../components/pokemons/Pokemons';

function Homepage() {
  return (
    <>
      <Filters />
      <Pokemons />
    </>
  );
}

export default Homepage;

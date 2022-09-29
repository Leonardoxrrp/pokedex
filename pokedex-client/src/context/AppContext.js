import React, { createContext, useMemo, useState } from 'react';

const Context = createContext(null);

function AppContext({ children }) {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonByName, setPokemonByName] = useState([]);
  const value = useMemo(() => ({
    pokemons, setPokemons, pokemonByName, setPokemonByName,
  }), [pokemons, setPokemons, pokemonByName, setPokemonByName]);

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  );
}

export { AppContext, Context };

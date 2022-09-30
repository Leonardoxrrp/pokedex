import React, { createContext, useMemo, useState } from 'react';

const Context = createContext(null);

function AppContext({ children }) {
  const [searchPokemon, setSearchPokemon] = useState(null);
  const [pokemons, setPokemons] = useState([]);
  const [pokemonByName, setPokemonByName] = useState([]);
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState(null);
  const [favorites, setFavorites] = useState('all');
  const value = useMemo(() => ({
    pokemons,
    setPokemons,
    pokemonByName,
    setPokemonByName,
    searchPokemon,
    setSearchPokemon,
    types,
    setTypes,
    selectedType,
    setSelectedType,
    favorites,
    setFavorites,
  }), [pokemons, setPokemons,
    pokemonByName,
    setPokemonByName, searchPokemon,
    setSearchPokemon, types, setTypes,
    selectedType, setSelectedType, favorites, setFavorites]);

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  );
}

export { AppContext, Context };

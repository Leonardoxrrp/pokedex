import React, { createContext, useMemo, useState } from 'react';

const Context = createContext(null);

function AppContext({ children }) {
  const [pokemons, setPokemons] = useState([]);
  const value = useMemo(() => ({
    pokemons, setPokemons,
  }), [pokemons, setPokemons]);

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  );
}

export { AppContext, Context };

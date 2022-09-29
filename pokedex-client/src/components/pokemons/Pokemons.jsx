import { useQuery } from '@apollo/client';
import React, { useEffect, useContext } from 'react';
import { Context } from '../../context/AppContext';
import { POKEMONS } from '../../graphql/queries';
import './pokemons.css';

function Pokemons() {
  const { pokemons, setPokemons } = useContext(Context);
  const { loading, data } = useQuery(POKEMONS, {
    variables: {
      limit: 200,
    },
  });

  const types = (arr) => arr.join(', ');

  useEffect(() => {
    if (!loading) setPokemons(data.pokemons.edges);
  }, [data]);

  return (
    <div className="pokemons-container">
      {
        pokemons.map((pokemon) => (
          <div className="pokemons-card">
            <img src={pokemon.image} alt={pokemon.name} />
            <div className="pokemons-details">
              <p className="fw-bold">{pokemon.name}</p>
              <p>{types(pokemon.types)}</p>
            </div>
          </div>
        ))
      }
    </div>
  );
}

export default Pokemons;

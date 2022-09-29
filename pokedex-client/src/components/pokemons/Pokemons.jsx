import { useQuery } from '@apollo/client';
import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
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
          <Link to={pokemon.name} className="pokemons-card" style={{ textDecoration: 'none' }}>
            <img src={pokemon.image} alt={pokemon.name} />
            <div className="pokemons-details">
              <p className="fw-bold pokemon-text">{pokemon.name}</p>
              <p className="pokemon-text">{types(pokemon.types)}</p>
            </div>

          </Link>
        ))
      }
    </div>
  );
}

export default Pokemons;

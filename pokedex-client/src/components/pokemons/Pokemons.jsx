import { useQuery } from '@apollo/client';
import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/AppContext';
import { POKEMONS } from '../../graphql/queries';
import './pokemons.css';

function Pokemons() {
  const {
    pokemons, searchPokemon, setPokemons, selectedType, favorites,
  } = useContext(Context);
  const { loading, data } = useQuery(POKEMONS, {
    variables: {
      limit: 200,
    },
  });
  const types = (arr) => arr.join(', ');
  useEffect(() => {
    if (!loading) setPokemons(data.pokemons.edges);
  }, [data]);

  console.log(data, 'data');
  return (
    <div className="pokemons-container">
      {
        pokemons.filter((pokemon) => {
          if (favorites === 'all' && !pokemon.isFavorite) return true;
          if (favorites === 'favorites' && pokemon.isFavorite) return true;
          return false;
        }).filter((pokemon) => {
          if (!selectedType) return true;
          return pokemon.types.toString().toLowerCase().includes(selectedType.toLowerCase());
        }).filter((pokemon) => {
          if (!searchPokemon) return true;
          return pokemon.name.toLowerCase().includes(searchPokemon);
        }).map((pokemon) => (
          <Link to={pokemon.name} key={pokemon.id} className="pokemons-card" style={{ textDecoration: 'none' }}>
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

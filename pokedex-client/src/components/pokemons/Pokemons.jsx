import { useQuery } from '@apollo/client';
import React, {
  useEffect, useContext, useCallback, useMemo,
} from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/AppContext';
import { POKEMONS } from '../../graphql/queries';
import './pokemons.css';

function Pokemons() {
  const {
    pokemons, searchPokemon, setPokemons, selectedType, favorites, view,
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
  const viewContainer = useMemo(() => (view === 'square' ? 'pokemons-container' : 'pokemons-container-vertical'), [view]);
  const viewDetails = useMemo(() => (view === 'square' ? 'pokemons-details' : 'pokemons-details-vertical'), [view]);
  const viewCard = useMemo(() => (view === 'square' ? 'pokemons-card' : 'pokemons-card-vertical'), [view]);

  return (
    <div className={viewContainer}>
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
          <Link to={pokemon.name} key={pokemon.id} className={viewCard} style={{ textDecoration: 'none' }}>
            <img src={pokemon.image} alt={pokemon.name} />
            <div className={viewDetails}>
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

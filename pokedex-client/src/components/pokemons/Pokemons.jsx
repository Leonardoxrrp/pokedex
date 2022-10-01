import { useMutation, useQuery } from '@apollo/client';
import { BsHeart, BsFillHeartFill } from 'react-icons/bs';
import React, {
  useEffect, useContext, useMemo,
} from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/AppContext';
import { FAVORITE, UNFAVORITE } from '../../graphql/mutations';
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

  const [unFavoritePokemon] = useMutation(UNFAVORITE, {
    refetchQueries: [{
      query: POKEMONS,
      variables: {
        limit: 200,
      },
    }],

  });
  const [favoritePokemon] = useMutation(FAVORITE, {
    refetchQueries: [{
      query: POKEMONS,
      variables: {
        limit: 200,
      },
    }],

  });
  const types = (arr) => arr.join(', ');

  useEffect(() => {
    if (!loading) setPokemons(data.pokemons.edges);
  }, [data]);

  const viewContainer = useMemo(() => (view === 'square' ? 'pokemons-container' : 'pokemons-container-vertical'), [view]);
  const viewDetails = useMemo(() => (view === 'square' ? 'pokemons-details' : 'pokemons-details-vertical'), [view]);
  const viewCard = useMemo(() => (view === 'square' ? 'pokemons-card' : 'pokemons-card-vertical'), [view]);
  const handleFavorite = (id, like) => (like ? favoritePokemon({ variables: { id } })
    : unFavoritePokemon({ variables: { id } }));
  return (
    <div className={viewContainer}>
      {
        pokemons.filter((pokemon) => {
          if (favorites === 'all') return true;
          if (favorites === 'favorites' && pokemon.isFavorite) return true;
          return false;
        }).filter((pokemon) => {
          if (!selectedType) return true;
          return pokemon.types.toString().toLowerCase().includes(selectedType.toLowerCase());
        }).filter((pokemon) => {
          if (!searchPokemon) return true;
          return pokemon.name.toLowerCase().includes(searchPokemon);
        }).map((pokemon) => (
          <div key={pokemon.id} className={viewCard}>
            <Link to={pokemon.name} style={{ textDecoration: 'none' }}>
              <img src={pokemon.image} alt={pokemon.name} />
            </Link>
            <div className={viewDetails}>
              <Link to={pokemon.name} style={{ textDecoration: 'none' }}>
                <p className="fw-bold pokemons-text-title">{pokemon.name}</p>
              </Link>
              <p className="pokemons-text">{types(pokemon.types)}</p>
              {pokemon.isFavorite ? <BsFillHeartFill onClick={() => handleFavorite(pokemon.id, false)} className="heart-icon" /> : <BsHeart onClick={() => handleFavorite(pokemon.id, true)} className="heart-icon" />}
            </div>
          </div>
        ))
      }
    </div>
  );
}

export default Pokemons;

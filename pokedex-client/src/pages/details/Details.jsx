import { useQuery } from '@apollo/client';
import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '../../context/AppContext';
import { POKEMON } from '../../graphql/queries';
import './details.css';

function Details() {
  const { name } = useParams();
  const { pokemonByName, setPokemonByName } = useContext(Context);
  const { loading, error, data } = useQuery(POKEMON, {
    variables: {
      name,
    },
  });

  useEffect(() => {
    if (!loading) setPokemonByName(data.pokemonByName);
  }, [data]);

  return (
    <div className="details-container">
      <img src={pokemonByName.image} alt={pokemonByName.name} />
      <div className="details-info">
        <div className="details-status">
          <p className="fw-bold">{pokemonByName.name}</p>
          <p>{pokemonByName.types}</p>
          <div className="details-cp">
            <div className="details-bar" />
            <p className="text">
              CP:
              {pokemonByName.maxCP}
            </p>
          </div>
          <div className="details-hp">
            <div className="details-bar" />
            <p>
              CP:
              {pokemonByName.maxHP}
            </p>
          </div>
        </div>
        <div className="details-size">
          <div>
            weight
          </div>
          <div>
            height
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;

import { useMutation, useQuery } from '@apollo/client';
import React, { useEffect, useContext, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { BsHeart, BsFillHeartFill, BsVolumeUpFill } from 'react-icons/bs';
import { FAVORITE, UNFAVORITE } from '../../graphql/mutations';
import { Context } from '../../context/AppContext';
import { POKEMON } from '../../graphql/queries';
import './details.css';

function Details() {
  const audioRef = useRef(null);
  const { name } = useParams();
  const { pokemonByName, setPokemonByName } = useContext(Context);
  const { loading, data } = useQuery(POKEMON, {
    variables: {
      name,
    },
  });
  const [unFavoritePokemon] = useMutation(UNFAVORITE, {
    refetchQueries: [{
      query: POKEMON,
      variables: {
        name,
      },
    }],

  });
  const [favoritePokemon] = useMutation(FAVORITE, {
    refetchQueries: [{
      query: POKEMON,
      variables: {
        name,
      },
    }],

  });

  const handleAudio = () => {
    const playPromise = audioRef.current.play();
    if (playPromise !== undefined) {
      playPromise
        .then((_) => {
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };
  const handleFavorite = (id, like) => (like ? favoritePokemon({ variables: { id } })
    : unFavoritePokemon({ variables: { id } }));

  useEffect(() => {
    if (!loading) setPokemonByName(data.pokemonByName);
  }, [data]);

  return (
    <div>

      <div className="details-container">
        <img src={pokemonByName.image} alt={pokemonByName.name} />

        <div className="details-info">
          <div className="details-status">
            <audio id="yourAudio" preload="none" ref={audioRef} type="audio/mp3" controls="">
              <track
                default
                kind="captions"
                srcLang="en"
              />
              <source src={pokemonByName.sound} />
            </audio>
            <BsVolumeUpFill onClick={() => handleAudio()} className="audio-icon" />
            {pokemonByName.isFavorite ? <BsFillHeartFill onClick={() => handleFavorite(pokemonByName.id, false)} className="heart-icon" /> : <BsHeart onClick={() => handleFavorite(pokemonByName.id, true)} className="heart-icon" />}
            <p className="fw-bold details-text-name">{pokemonByName.name}</p>
            <p className="details-text-type">{pokemonByName.types}</p>
            <div className="details-cp">
              <span className="details-bar-cp" />
              <p className="details-text-cp fw-bold">
                <span>CP: </span>
                {pokemonByName.maxCP}
              </p>
            </div>
            <div className="details-hp">
              <div className="details-bar-hp" />
              <p className="details-text-hp fw-bold">
                <span>HP: </span>
                {pokemonByName.maxHP}
              </p>
            </div>
          </div>
          <div className="details-size">
            <div className="details-weight">
              <p className="fw-bold details-text-weight">Weight</p>
              <p>
                {pokemonByName.weight?.minimum}
                {' '}
                -
                {' '}
                {pokemonByName.weight?.maximum}
              </p>
            </div>
            <div className="details-height">
              <p className="fw-bold details-text-height">Height</p>
              <p>
                {pokemonByName.height?.minimum}
                {' '}
                -
                {' '}
                {pokemonByName.height?.maximum}
              </p>
            </div>
          </div>
        </div>
      </div>
      {(pokemonByName.evolutions && pokemonByName.evolutions.length > 0) && <p className="fw-bold evolutions-title">Evolutions</p> }
      <div className="details-evolutions">

        {
        pokemonByName?.evolutions?.map((evolution) => (
          <div className="details-evolutions-card" key={evolution.id}>
            <img src={evolution.image} alt={evolution.name} />
            <div className="details-evolutions-info">
              <p className="fw-bold evolution-name">{evolution.name}</p>
            </div>
            {evolution.isFavorite ? <BsFillHeartFill onClick={() => handleFavorite(evolution.id, false)} className="heart-icon-evolution" /> : <BsHeart onClick={() => handleFavorite(evolution.id, true)} className="heart-icon-evolution" />}
          </div>
        ))
      }
      </div>
    </div>

  );
}

export default Details;

import { useQuery } from '@apollo/client';
import React, { useContext, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { Context } from '../../context/AppContext';
import { TYPES } from '../../graphql/queries';
import Views from '../views/Views';
import './filters.css';

function Filters() {
  const {
    setSearchPokemon, types, setTypes, setSelectedType, setFavorites, favorites,
  } = useContext(Context);
  const { loading, data } = useQuery(TYPES);

  const handleSearch = (e) => setSearchPokemon(e.target.value.trim().toLowerCase());
  const handleType = (e) => setSelectedType(e.target.value);
  const handleButton = (btn) => {
    setFavorites(btn);
    sessionStorage.setItem('favorites', btn);
  };
  useEffect(() => { if (!loading) setTypes(data.pokemonTypes); }, [data]);

  return (
    <div className="filters-container">
      <div className="filters-buttons">
        <Button variant={favorites === 'all' ? 'success' : 'outline-success'} onClick={() => handleButton('all')}>All</Button>
        <Button variant={favorites === 'favorites' ? 'success' : 'outline-success'} onClick={() => handleButton('favorites')}>Favorites</Button>
      </div>
      <div className="filters-options">
        <input placeholder="Search" onChange={handleSearch} />
        <select name="selectType" value="none" onChange={handleType}>
          <option value="none" disabled hidden>
            Type
          </option>
          {

            types?.map((type) => (
              <option key={type}>{type}</option>
            ))
        }
        </select>
        <Views />
      </div>
    </div>
  );
}

export default Filters;

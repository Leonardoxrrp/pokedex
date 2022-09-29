import { useQuery } from '@apollo/client';
import { useContext } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Homepage from './pages/homepage/Homepage';
import { POKEMONS } from './graphql/queries';
import { Context } from './context/appContext';

function App() {
  const value = useContext(Context);
  const { loading, error, data } = useQuery(POKEMONS, {
    variables: {
      name: 'pikachu',
    },
  });

  console.log(data);

  return (
    <Context.Provider value={value}>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </Context.Provider>
  );
}

export default App;

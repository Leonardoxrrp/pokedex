import { useQuery } from '@apollo/client';
import { POKEMONS } from './graphql/queries';

function App() {
  const { data } = useQuery(POKEMONS, {
    variables: {
      name: 'pikachu',
    },
  });

  console.log(data);

  return null;
}

export default App;

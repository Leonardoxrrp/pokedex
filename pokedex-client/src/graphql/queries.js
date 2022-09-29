import { gql } from '@apollo/client';

export const POKEMONS = gql`
query Name($name:String!){
    pokemonByName(name:$name){
      id
      number
      name
    }
  }
`;

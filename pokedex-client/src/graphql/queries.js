import { gql } from '@apollo/client';

export const POKEMONS = gql`
query pokemons($limit:Int!){
  pokemons(query:{
    limit:$limit
  }){
    edges{
      id
      name
      image
      types
    }
  }
}
`;

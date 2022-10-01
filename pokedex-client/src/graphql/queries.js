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
      isFavorite
    }
  }
}
`;

export const TYPES = gql`
query pokemon{
  pokemonTypes
}
`;

export const POKEMON = gql`
query pokemon($name:String!){
  pokemonByName(name:$name) {
    name
    maxHP
    maxCP
    sound
    isFavorite
    sound
    id
    image
    types
    evolutions {
      image
      name
      id
      isFavorite
    }
    weight {
      minimum
      maximum
    }
    height {
      minimum
      maximum
    }
  }
}
`;

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

export const POKEMON = gql`
query pokemon($name:String!){
  pokemonByName(name:$name) {
    name
    maxHP
    maxCP
    sound
    image
    types
    evolutions {
      image
      name
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

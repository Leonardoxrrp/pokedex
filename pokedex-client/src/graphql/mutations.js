import { gql } from '@apollo/client';

export const FAVORITE = gql`
mutation favorite($id: ID!){
    favoritePokemon(id: $id) {
      isFavorite
    }
  }
  `;

export const UNFAVORITE = gql`
  mutation unFavorite($id: ID!){
    unFavoritePokemon(id: $id) {
      isFavorite
    }
  }
  `;

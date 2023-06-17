import { gql } from '@apollo/client';

export const GET_MOVIES = gql`
  query {
    movies {
      id
      title
      medium_cover_image
      description_intro
      isLiked @client
    }
  }
`;

export const GET_MOVIE = gql`
  query getMovie($id: Int!) {
    movie(id: $id) {
      id
      title
      medium_cover_image
      description_intro
      rating
      language
      isLiked @client
    }
  }
`;

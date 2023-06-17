import { gql } from '@apollo/client';

export const LIKE_MOVIE = gql`
  mutation likeMovie($id: Int!, $isLiked: Boolean!) {
    likeMovie(id: $id, isLiked: $isLiked) @client
  }
`;

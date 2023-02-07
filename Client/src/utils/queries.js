import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
    }
  }
`;

export const QUERY_USER = gql`
query User($userId: ID!) {
  user(userId: $userId) {
    _id
    title
    name
    image
    description
    portfolioLink
  }
}
`;

export const QUERY_TEAM = gql`
query Teams($teamId: ID!) {
  team(teamId: $teamId) {
    name
    description
  }
}

`;
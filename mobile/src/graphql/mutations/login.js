import { gql } from 'react-apollo';

export default gql`
  mutation signup($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
    }
  }
`;

/* eslint-disable no-param-reassign */

import bodyParser from 'body-parser';
import { graphiqlExpress, graphqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';

import typeDefs from '../graphql/schema';
import resolvers from '../graphql/resolvers';
import constants from './constants';
import { decodeToken } from '../services/auth';

const schema = makeExecutableSchema({ typeDefs, resolvers });

async function auth(req, res, next) {
  try {
    const token = req.headers.authorization;
    if (token != null) {
      const user = await decodeToken(token);
      req.user = user || null;
    } else {
      req.user = null;
    }
    return next();
  } catch (error) {
    throw error;
  }
}

export default app => {
  // Parse http information as JSON.
  app.use(bodyParser.json());

  // Use the authentication to insert a 'user' in the request.
  app.use(auth);

  // The graphical route at '/graphiql'.
  app.use(
    '/graphiql',
    graphiqlExpress({
      endpointURL: constants.GRAPHQL_PATH,
    })
  );

  // Initialize GraphQL.
  app.use(
    constants.GRAPHQL_PATH,
    graphqlExpress(req => ({
      schema,
      context: {
        user: req.user,
      },
    }))
  );
};

/* eslint-disable no-param-reassign */

import { createStore, applyMiddleware } from 'redux';
import { AsyncStorage } from 'react-native';
import { composeWithDevTools } from 'redux-devtools-extension';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import {
  SubscriptionClient,
  addGraphQLSubscriptions,
} from 'subscriptions-transport-ws';

import reducers from './reducers';

const networkInterface = createNetworkInterface({
  uri: 'http://192.168.2.60:3001/graphql',
});

const wsClient = new SubscriptionClient(
  'ws://192.168.2.60:3001/subscriptions',
  {
    reconnect: true,
    connectionParams: {},
  }
);

networkInterface.use([
  {
    async applyMiddleware(req, next) {
      if (!req.options.headers) {
        req.options.headers = {};
      }
      try {
        const token = await AsyncStorage.getItem('twitterclone');
        if (token != null) {
          req.options.headers.authorization = `Bearer ${token}` || null;
        }
      } catch (error) {
        throw error;
      }

      return next();
    },
  },
]);

const networkInterfaceWithSubs = addGraphQLSubscriptions(
  networkInterface,
  wsClient
);

export const client = new ApolloClient({
  networkInterface: networkInterfaceWithSubs,
});

const middlewares = [client.middleware(), thunk, createLogger()];

export const store = createStore(
  reducers(client),
  undefined,
  composeWithDevTools(applyMiddleware(...middlewares))
);

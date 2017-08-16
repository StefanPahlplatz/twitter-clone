/* eslint-disable no-console */

import express from 'express';
import { createServer } from 'http';

import './config/db';
import constants from './config/constants';
import middlewares from './config/middlewares';
import mocks from './mocks';

const app = express();

middlewares(app);

const graphQLServer = createServer(app);

if (constants.RANDOM_DATA) {
  mocks().then(() => {
    startServer();
  });
} else {
  startServer();
}

function startServer() {
  graphQLServer.listen(constants.PORT, err => {
    if (err) {
      console.error(err);
    } else {
      console.log(`App listening on PORT: ${constants.PORT}`);
    }
  });
}

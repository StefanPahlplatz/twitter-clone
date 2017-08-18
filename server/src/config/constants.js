export default {
  PORT: process.env.PORT || 3001,
  DB_URL: 'mongodb://localhost/twitter-dev',
  GRAPHQL_PATH: '/graphql',
  SUBSCRIPTIONS_PATH: '/subscriptions',
  JWT_SECRET: 'supersecretkey',
  RANDOM_DATA: false, // Wether you want to regenerate the data per reload or not.
};

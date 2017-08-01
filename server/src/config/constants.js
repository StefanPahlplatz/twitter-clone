export default {
  PORT: process.env.PORT || 3001,
  DB_URL: 'mongodb://localhost/twitter-dev',
  GRAPHQL_PATH: '/graphql',
  JWT_SECRET: 'supersecretkey',
};

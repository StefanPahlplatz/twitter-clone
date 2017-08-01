import GraphQLDate from 'graphql-date';

import UserResolver from './user-resolver';
import TweetResolvers from './tweet-resolvers';
import User from '../../models/User';

export default {
  Date: GraphQLDate,
  Tweet: {
    user: ({ user }) => User.findById(user),
  },
  Query: {
    getTweet: TweetResolvers.getTweet,
    getTweets: TweetResolvers.getTweets,
    getUserTweets: TweetResolvers.getUserTweets,
    me: UserResolver.me,
  },
  Mutation: {
    createTweet: TweetResolvers.createTweet,
    updateTweet: TweetResolvers.updateTweet,
    deleteTweet: TweetResolvers.deleteTweet,
    signup: UserResolver.signup,
    login: UserResolver.login,
  },
};

export default `
  # Date type to format the date in UTC format, e.g. 2017-07-23T19:25:29.143Z
  scalar Date

  # Response status when preforming an action that doesn't return an object.
  type Status {
    # Status message.
    message: String!
  }

  type Auth {
    token: String!
  }

  type User {
    _id: ID!
    username: String!
    email: String!
    firstName: String!
    lastName: String
    avatar: String
    createdAt: Date!
    updatedAt: Date!
  }

  type Me {
    _id: ID!
    username: String
    email: String!
    firstName: String
    lastName: String
    avatar: String
    createdAt: Date!
    updatedAt: Date!
  }

  # A very simple tweet object.
  type Tweet {
    # Unique ID to identify the tweet.
    _id: ID!               
    # The text of the tweet.
    text: String!
    # The user that tweeted the tweet.
    user: User!
    # The amount of times the tweet is favorited.
    favoriteCount: Int!
    # The date at which the tweet was created.
    createdAt: Date!    
    # The date at which the tweet was updated.
    updatedAt: Date!
  }

  type Query {
    # Get a tweet by ID.
    getTweet(_id: ID!): Tweet
    # Get all tweets.
    getTweets: [Tweet] 
    # Get all the tweets that the user tweeted.
    getUserTweets: [Tweet]
    # Get the details of the user.
    me: Me
  }

  type Mutation {
    createTweet(text: String!): Tweet
    updateTweet(_id: ID!, text: String): Tweet
    deleteTweet(_id: ID!): Status
    signup(email: String!, fullName: String!, password: String!, avatar: String, username: String!): Auth
    login(username: String!, password: String!): Auth
  }

  type Subscription {
    tweetAdded: Tweet
  }

  schema {
    query: Query
    mutation: Mutation
    subscription: Subscription
  }
`;

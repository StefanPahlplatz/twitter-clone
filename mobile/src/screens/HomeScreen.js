import React, { Component } from 'react';
import styled from 'styled-components/native';
import { graphql } from 'react-apollo';
import { ActivityIndicator } from 'react-native';

import FeedCard from '../components/FeedCards/FeedCard';

import GET_TWEETS_QUERY from '../graphql/queries/getTweets';

const Root = styled.View`
  backgroundColor: #f2f2f2;
  flex: 1;
  justifyContent: center;
`;

const List = styled.ScrollView``;

class HomeScreen extends Component {
  state = {};
  render() {
    const { data } = this.props;
    if (data.loading) {
      return (
        <Root>
          <ActivityIndicator size="large" />
        </Root>
      );
    }
    return (
      <Root>
        <List>
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
        </List>
      </Root>
    );
  }
}

export default graphql(GET_TWEETS_QUERY)(HomeScreen);

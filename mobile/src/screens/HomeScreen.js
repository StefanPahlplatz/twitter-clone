import React, { Component } from 'react';
import styled from 'styled-components/native';
import { graphql } from 'react-apollo';
import { ActivityIndicator, FlatList } from 'react-native';
import { colors } from '../utils/constants';

import FeedCard from '../components/FeedCards/FeedCard';

import GET_TWEETS_QUERY from '../graphql/queries/getTweets';

const Root = styled.View`
  backgroundColor: #f2f2f2;
  flex: 1;
  justifyContent: center;
`;

class HomeScreen extends Component {
  _renderItem = ({ item }) => <FeedCard {...item} />;

  render() {
    const { data } = this.props;
    if (data.loading) {
      return (
        <Root>
          <ActivityIndicator size="large" color={colors.PRIMARY} />
        </Root>
      );
    }
    return (
      <Root>
        <FlatList
          contentContainerStyle={{ alignSelf: 'stretch' }}
          data={data.getTweets}
          keyExtractor={item => item._id}
          renderItem={this._renderItem}
        />
      </Root>
    );
  }
}

export default graphql(GET_TWEETS_QUERY)(HomeScreen);

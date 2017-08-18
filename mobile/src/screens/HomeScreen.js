import React, { Component } from 'react';
import styled from 'styled-components/native';
import { graphql, compose, withApollo } from 'react-apollo';
import { ActivityIndicator, FlatList } from 'react-native';
import { connect } from 'react-redux';

import FeedCard from '../components/FeedCards/FeedCard';

import { colors } from '../utils/constants';
import { getUserInfo } from '../actions/user';

import GET_TWEETS_QUERY from '../graphql/queries/getTweets';
import ME_QUERY from '../graphql/queries/me';

const Root = styled.View`
  backgroundColor: ${colors.WHITE_GREY};
  flex: 1;
  justifyContent: center;
`;

class HomeScreen extends Component {
  componentDidMount() {
    this._getUserInfo();
  }

  _getUserInfo = async () => {
    const { data: { me } } = await this.props.client.query({ query: ME_QUERY });
    this.props.getUserInfo(me);
  };

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

export default withApollo(
  compose(connect(undefined, { getUserInfo }), graphql(GET_TWEETS_QUERY))(
    HomeScreen
  )
);

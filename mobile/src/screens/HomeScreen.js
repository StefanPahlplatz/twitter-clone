import React, { Component } from 'react';
import styled from 'styled-components/native';
import { graphql, compose, withApollo } from 'react-apollo';
import { ActivityIndicator, FlatList } from 'react-native';
import { connect } from 'react-redux';
import ActionButton from 'react-native-action-button';
import { Entypo } from '@expo/vector-icons';

import { FeedCard } from '../components';

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

  _newTweet = () => {
    this.props.navigation.navigate('NewTweet');
  };

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
        <ActionButton
          onPress={this._newTweet}
          buttonColor={colors.PRIMARY}
          position="right"
          icon={
            <Entypo
              name="feather"
              style={{ fontSize: 20, height: 22, color: 'white' }}
            />
          }
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

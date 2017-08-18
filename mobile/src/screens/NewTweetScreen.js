import React, { Component } from 'react';
import styled from 'styled-components/native';
import { Keyboard } from 'react-native';
import { graphql, compose } from 'react-apollo';
import { connect } from 'react-redux';

import { TextInput } from '../components';
import { colors } from '../utils/constants';

import CREATE_TWEET_MUTATION from '../graphql/mutations/createTweet';
import GET_TWEETS_QUERY from '../graphql/queries/getTweets';

const Root = styled.View`
  backgroundColor: ${colors.WHITE};
  flex: 1;
  alignItems: center;
`;

const Wrapper = styled.View`
  width: 90%;
  position: relative;
`;

const InputStyle = {
  fontSize: 18,
  height: 140,
  marginTop: 16,
  paddingHorizontal: 0,
  textAlignVertical: 'top',
};

const BottomWrapper = styled.View`
  alignSelf: flex-end;
  flexDirection: row;
  alignItems: center;
`;

const TweetButton = styled.TouchableOpacity`
  backgroundColor: ${colors.PRIMARY};
  justifyContent: center;
  alignItems: center;
  width: 80;
  height: 35;
  borderRadius: 50;
`;

const TweetButtonText = styled.Text`
  color: ${colors.WHITE};
  fontWeight: 600;
  fontSize: 16;
`;

const TextLength = styled.Text`
  fontSize: 16;
  color: ${colors.PRIMARY};
  paddingHorizontal: 16;
`;

class NewTweetScreen extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
    };
  }

  _onChangeText = text => {
    this.setState({ text });
  };

  _onCreateTweetPress = async () => {
    const { user } = this.props;

    await this.props.mutate({
      variables: {
        text: this.state.text,
      },
      optimisticResponse: {
        __typename: 'Mutation',
        createTweet: {
          __typename: 'Tweet',
          text: this.state.text,
          favoriteCount: 0,
          _id: Math.round(Math.random() * -100000),
          createdAt: new Date(),
          user: {
            __typename: 'User',
            ...user,
          },
        },
      },
      update: (store, { data: { createTweet } }) => {
        const data = store.readQuery({ query: GET_TWEETS_QUERY });
        if (!data.getTweets.find(tweet => tweet._id === createTweet._id)) {
          store.writeQuery({
            query: GET_TWEETS_QUERY,
            data: { getTweets: [{ ...createTweet }, ...data.getTweets] },
          });
        }
      },
    });
    Keyboard.dismiss();
    this.props.navigation.goBack(null);
  };

  get _textLength() {
    return 140 - this.state.text.length;
  }

  get _buttonDisabled() {
    return this.state.text.length < 5;
  }

  render() {
    return (
      <Root>
        <Wrapper>
          <TextInput
            placeholder="What's happening?"
            color={colors.SECONDARY}
            underlineColorAndroid={colors.WHITE}
            value={this.state.text}
            onChangeText={this._onChangeText}
            autoFocus
            multiline
            style={InputStyle}
          />
          <BottomWrapper>
            <TextLength>
              {this._textLength}
            </TextLength>
            <TweetButton
              onPress={this._onCreateTweetPress}
              disabled={this._buttonDisabled}
            >
              <TweetButtonText>Tweet</TweetButtonText>
            </TweetButton>
          </BottomWrapper>
        </Wrapper>
      </Root>
    );
  }
}

export default compose(
  graphql(CREATE_TWEET_MUTATION),
  connect(state => ({ user: state.user.info }))
)(NewTweetScreen);

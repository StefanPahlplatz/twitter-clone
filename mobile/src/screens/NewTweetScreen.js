import React, { Component } from 'react';
import styled from 'styled-components/native';
import { TextInput } from '../components';
import { colors } from '../utils/constants';

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

  get _textLength() {
    return 140 - this.state.text.length;
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
            <TweetButton>
              <TweetButtonText>Tweet</TweetButtonText>
            </TweetButton>
          </BottomWrapper>
        </Wrapper>
      </Root>
    );
  }
}

export default NewTweetScreen;

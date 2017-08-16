import React, { Component } from 'react';
import styled from 'styled-components/native';
import { graphql, compose } from 'react-apollo';
import { AsyncStorage, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';

import DismissKeyboardHOC from '../components/DismissKeyboardHOC';
import { colors, fakeAvatar } from '../utils/constants';
import SIGNUP_MUTATION from '../graphql/mutations/signup';
import { login } from '../actions/user';

const Root = styled.View`
  flex: 1;
  backgroundColor: ${props => props.theme.SECONDARY};
  position: relative;
  alignItems: center;
`;

const DismissKeyboardView = DismissKeyboardHOC(Root);

const InputWrapper = styled.View`
  height: 50;
  width: 70%;
  marginVertical: 5;
  justifyContent: flex-end;
`;

const Input = styled.TextInput.attrs({
  placeholderTextColor: colors.LIGHT_GRAY,
  selectionColor: colors.PRIMARY,
  autoCorrect: false,
  paddingHorizontal: 8,
  paddingBottom: 14,
})`
height: 30;
color: ${props => props.theme.WHITE};
`;

const UsernamePrefix = styled.Text`
  color: ${props => props.theme.LIGHT_GREY};
  marginBottom: -14;
  marginLeft: 8;
`;

const BottomContainer = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 200;
  alignItems: center;
`;

const RegisterButton = styled.TouchableOpacity`
  marginTop: 40;
  height: 35;
  width: 70%;
  backgroundColor: ${props => props.theme.PRIMARY};
  justifyContent: center;
  alignItems: center;
  borderRadius: 2;
`;

const RegisterButtonText = styled.Text`color: ${props => props.theme.WHITE};`;

class LoginScreen extends Component {
  constructor() {
    super();

    this.state = {
      fullName: '',
      username: '',
      email: '',
      password: '',
      isUsernameEdited: false,
      loading: false,
    };
  }

  _onChangeText = (text, type) => {
    // Update the state.
    this.setState({ [type]: text });

    // If we're writing the name also fill the username.
    if (type === 'fullName' && !this.state.isUsernameEdited) {
      this.setState({
        username: text.replace(/ /, ''),
      });
    }

    // Disable the autofill of username after the user types in it.
    if (type === 'username') {
      this.setState({ isUsernameEdited: true });
    }
  };

  _checkDisabled() {
    const { fullName, username, email, password, loading } = this.state;
    return !fullName || !email || !password || !username || loading;
  }

  _onSignupPress = async () => {
    this.setState({ loading: true });

    const { fullName, username, email, password } = this.state;
    const avatar = fakeAvatar;

    try {
      const { data } = await this.props.mutate({
        variables: {
          fullName,
          email,
          password,
          username,
          avatar,
        },
      });
      await AsyncStorage.setItem('twitterclone', data.signup.token);
      this.setState({ loading: false });
      return this.props.login();
    } catch (e) {
      throw e;
    }
  };

  render() {
    return (
      <DismissKeyboardView>
        <InputWrapper>
          <Input
            placeholder="Full Name"
            autoCapitalize="words"
            underlineColorAndroid="#f1f1f1"
            onChangeText={text => this._onChangeText(text, 'fullName')}
            value={this.state.fullName}
          />
        </InputWrapper>
        <InputWrapper>
          <UsernamePrefix>@</UsernamePrefix>
          <Input
            style={{ paddingLeft: 24 }}
            placeholder="Username"
            autoCapitalize="words"
            underlineColorAndroid="#f1f1f1"
            onChangeText={text => this._onChangeText(text, 'username')}
            value={this.state.username}
          />
        </InputWrapper>
        <InputWrapper>
          <Input
            placeholder="Email"
            underlineColorAndroid="#f1f1f1"
            keyboardType="email-address"
            onChangeText={text => this._onChangeText(text, 'email')}
          />
        </InputWrapper>
        <InputWrapper>
          <Input
            placeholder="Password"
            underlineColorAndroid="#f1f1f1"
            onChangeText={text => this._onChangeText(text, 'password')}
            secureTextEntry
          />
        </InputWrapper>
        <BottomContainer>
          <RegisterButton
            onPress={this._onSignupPress}
            disabled={this._checkDisabled()}
          >
            <RegisterButtonText>Register</RegisterButtonText>
          </RegisterButton>
          {this.state.loading &&
            <ActivityIndicator
              style={{ marginTop: 16 }}
              size="small"
              color={colors.PRIMARY}
            />}
        </BottomContainer>
      </DismissKeyboardView>
    );
  }
}

export default compose(graphql(SIGNUP_MUTATION), connect(undefined, { login }))(
  LoginScreen
);

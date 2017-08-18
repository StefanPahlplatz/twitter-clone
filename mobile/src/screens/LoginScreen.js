import React, { Component } from 'react';
import styled from 'styled-components/native';
import { graphql, compose } from 'react-apollo';
import { AsyncStorage } from 'react-native';
import { connect } from 'react-redux';

import Loading from '../components/Loading';
import DismissKeyboardHOC from '../components/DismissKeyboardHOC';
import { colors } from '../utils/constants';
import LOGIN_MUTATION from '../graphql/mutations/login';
import { login } from '../actions/user';

const Root = styled.View`
  flex: 1;
  backgroundColor: ${props => props.theme.SECONDARY};
  position: relative;
  alignItems: center;
`;

const DismissKeyboardView = DismissKeyboardHOC(Root);

const Logo = styled.Image`
  width: 120;
  height: 120;
  marginTop: 5%;
  marginBottom: 40;
`;

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

const ErrorTextWrapper = styled.View`
  height: 40;
  justifyContent: center;
  alignItems: center;
`;

const ErrorText = styled.Text`color: ${props => props.theme.RED};`;

const LoginButton = styled.TouchableOpacity`
  marginTop: 20;
  height: 35;
  width: 70%;
  backgroundColor: ${props => props.theme.SECONDARY};
  justifyContent: center;
  alignItems: center;
  borderRadius: 2;
  borderWidth: 2;
  borderColor: ${props => props.theme.PRIMARY};
`;

const LoginButtonText = styled.Text`color: ${props => props.theme.WHITE};`;

const RegisterButton = styled.TouchableOpacity`
  marginTop: 8;
  height: 35;
  width: 70%;
  backgroundColor: ${props => props.theme.SECONDARY};
  justifyContent: center;
  alignItems: center;
`;

const RegisterButtonText = styled.Text`
  color: ${props => props.theme.LIGHT_GREY};
`;

class LoginScreen extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
      error: null,
    };
  }

  _onLoginPress = async () => {
    this.setState({ loading: true, error: null });

    const { username, password } = this.state;

    try {
      const { data } = await this.props.mutate({
        variables: {
          username,
          password,
        },
      });
      await AsyncStorage.setItem('twitterclone', data.login.token);
      this.setState({ loading: false });
      return this.props.login();
    } catch (e) {
      this.setState({ error: "Can't log in!", loading: false });
    }
  };

  _onChangeText = (text, type) => {
    this.setState({ [type]: text });
  };

  render() {
    return (
      <DismissKeyboardView>
        <Logo source={require('../../assets/icons/twitter-icon.png')} />
        <InputWrapper>
          <UsernamePrefix>@</UsernamePrefix>
          <Input
            style={{ paddingLeft: 24 }}
            placeholder="Username"
            autoCapitalize="words"
            underlineColorAndroid="#f1f1f1"
            onChangeText={text => this._onChangeText(text, 'username')}
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

        <ErrorTextWrapper>
          {this.state.error &&
            <ErrorText>
              {this.state.error}
            </ErrorText>}
          {this.state.loading && <Loading size="small" />}
        </ErrorTextWrapper>

        <LoginButton onPress={this._onLoginPress}>
          <LoginButtonText>Login</LoginButtonText>
        </LoginButton>
        <RegisterButton
          onPress={() => this.props.navigation.navigate('Register')}
        >
          <RegisterButtonText>Register</RegisterButtonText>
        </RegisterButton>
      </DismissKeyboardView>
    );
  }
}

export default compose(graphql(LOGIN_MUTATION), connect(undefined, { login }))(
  LoginScreen
);

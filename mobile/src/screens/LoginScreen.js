import React, { Component } from 'react';
import styled from 'styled-components/native';
import { colors } from '../utils/constants';

const Root = styled.View`
  flex: 1;
  backgroundColor: ${props => props.theme.SECONDARY};
  position: relative;
  alignItems: center;
`;

const Logo = styled.Image`
  width: 120;
  height: 120;
  marginTop: 20%;
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

const BottomContainer = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 200;
  alignItems: center;
`;

const LoginButton = styled.TouchableOpacity`
  height: 35;
  width: 70%;
  backgroundColor: ${props => props.theme.SECONDARY};
  justifyContent: center;
  alignItems: center;
  borderRadius: 2;
  borderWidth: 2;
  borderColor: ${props => props.theme.LIGHT_GREY};
`;

const RegisterButton = styled.TouchableOpacity`
  marginTop: 8;
  height: 35;
  width: 70%;
  backgroundColor: ${props => props.theme.SECONDARY};
  justifyContent: center;
  alignItems: center;
`;

const LoginButtonText = styled.Text`color: ${props => props.theme.WHITE};`;

const RegisterButtonText = styled.Text`
  color: ${props => props.theme.LIGHT_GREY};
`;

class LoginScreen extends Component {
  render() {
    return (
      <Root>
        <Logo source={require('../../assets/icons/twitter-icon.png')} />
        <InputWrapper>
          <UsernamePrefix>@</UsernamePrefix>
          <Input
            style={{ paddingLeft: 24 }}
            placeholder="Username"
            autoCapitalize="words"
            underlineColorAndroid="#f1f1f1"
          />
        </InputWrapper>
        <InputWrapper>
          <Input
            placeholder="Password"
            underlineColorAndroid="#f1f1f1"
            secureTextEntry
            password
          />
        </InputWrapper>
        <BottomContainer>
          <LoginButton>
            <LoginButtonText>Login</LoginButtonText>
          </LoginButton>
          <RegisterButton>
            <RegisterButtonText>Register</RegisterButtonText>
          </RegisterButton>
        </BottomContainer>
      </Root>
    );
  }
}

export default LoginScreen;

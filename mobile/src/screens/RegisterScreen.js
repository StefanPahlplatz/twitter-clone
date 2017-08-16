import React, { Component } from 'react';
import styled from 'styled-components/native';
import { Keyboard } from 'react-native';

import DismissKeyboardHOC from '../components/DismissKeyboardHOC';
import { colors } from '../utils/constants';

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
  _onOutsidePress = () => Keyboard.dismiss();

  render() {
    return (
      <DismissKeyboardView>
        <InputWrapper>
          <Input placeholder="Full Name" underlineColorAndroid="#f1f1f1" />
        </InputWrapper>
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
          <Input placeholder="Email" underlineColorAndroid="#f1f1f1" />
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
          <RegisterButton>
            <RegisterButtonText>Register</RegisterButtonText>
          </RegisterButton>
        </BottomContainer>
      </DismissKeyboardView>
    );
  }
}

export default LoginScreen;

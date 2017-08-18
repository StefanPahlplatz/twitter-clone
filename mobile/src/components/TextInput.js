import React from 'react';
import styled from 'styled-components/native';
import { colors } from '../utils/constants';

const Input = styled.TextInput.attrs({
  placeholderTextColor: colors.LIGHT_GRAY,
  selectionColor: colors.PRIMARY,
  paddingHorizontal: 8,
  paddingBottom: 14,
})`
  height: 30;
  color: ${props => props.theme.WHITE};
`;

const TextInput = ({
  placeholder = '',
  keyboardType = 'default',
  secureTextEntry = false,
  underlineColorAndroid = '#f1f1f1',
  color = colors.WHITE,
  multiline = false,
  maxLength = 140,
  autoFocus = false,
  onChangeText,
  value,
  autoCapitalize,
  style,
}) => {
  const styles = {
    height: 30,
    color,
    ...style,
  };

  return (
    <Input
      placeholder={placeholder}
      underlineColorAndroid={underlineColorAndroid}
      keyboardType={keyboardType}
      onChangeText={onChangeText}
      value={value}
      autoCapitalize={autoCapitalize}
      style={styles}
      secureTextEntry={secureTextEntry}
      multiline={multiline}
      maxLength={maxLength}
      autoFocus={autoFocus}
    />
  );
};

export default TextInput;

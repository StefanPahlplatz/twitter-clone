import React from 'react';
import styled from 'styled-components/native';

const AvatarView = styled.Image`borderRadius: 100;`;

const Avatar = ({ avatar, size = 48 }) =>
  <AvatarView style={{ width: size, height: size }} source={{ uri: avatar }} />;

export default Avatar;

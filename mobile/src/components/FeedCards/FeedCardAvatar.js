import React from 'react';
import styled from 'styled-components/native';

const AvatarView = styled.Image`
  width: 48;
  height: 48;
  borderRadius: 100;
`;

const FeedCardAvatar = ({ avatar }) => <AvatarView source={{ uri: avatar }} />;

export default FeedCardAvatar;

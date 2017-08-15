import React from 'react';
import styled from 'styled-components/native';

import { fakeAvatar } from '../../utils/constants';

const AvatarView = styled.Image`
  width: 48;
  height: 48;
  borderRadius: 100;
`;

const FeedCardAvatar = () => <AvatarView source={{ uri: fakeAvatar }} />;

export default FeedCardAvatar;

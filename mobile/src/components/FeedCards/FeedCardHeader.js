import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

import timeElapsed from '../../utils/TimeSince';
import { Name, Meta } from '../../components';

const Root = styled.View`
  flexDirection: column;
  alignItems: flex-start;
`;

const FeedCardHeader = ({ firstName, lastName, username, createdAt }) =>
  <Root>
    <Text>
      <Name>
        {firstName} {lastName} {' '}
      </Name>
      <Meta>
        @{username}
        {' · '}
        {timeElapsed(createdAt)}
      </Meta>
    </Text>
  </Root>;

export default FeedCardHeader;

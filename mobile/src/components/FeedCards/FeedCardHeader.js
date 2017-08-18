import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

import timeElapsed from '../../utils/TimeSince';

const Root = styled.View`
  flexDirection: column;
  alignItems: flex-start;
`;

const Name = styled.Text`
  fontWeight: 600;
  fontSize: 16;
  paddingRight: 4;
  color: ${props => props.theme.SECONDARY};
`;

const Meta = styled.Text`
  fontSize: 16;
  color: ${props => props.theme.LIGHT_GREY};
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

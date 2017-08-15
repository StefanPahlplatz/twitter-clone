import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

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

const name = 'Charlie Lee';
const username = '@SatoshiLite';
const elapsed = '2d';

const FeedCardHeader = () =>
  <Root>
    <Text>
      <Name>
        {name}{' '}
      </Name>
      <Meta>
        {username}
        {' · '}
        {elapsed}
      </Meta>
    </Text>
  </Root>;

export default FeedCardHeader;

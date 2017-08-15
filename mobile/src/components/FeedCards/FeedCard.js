import React from 'react';
import styled from 'styled-components/native';

import FeedCardHeader from './FeedCardHeader';
import FeedCardBottom from './FeedCardBottom';
import FeedCardAvatar from './FeedCardAvatar';

/* To use shadows:
  shadowColor: ${props => props.theme.SECONDARY};
  shadowOffset: 0px 2px;
  shadowRadius: 2;
  shadowOpacity: 0.1;
  elevation: 1;
*/

const Root = styled.View`
  backgroundColor: ${props => props.theme.WHITE};
  width: 100%;
  flexDirection: row;
  paddingTop: 8;
  marginVertical: .5;
`;

const LeftSide = styled.View`
  width: 72;
  alignItems: center;
`;

const AvatarContainer = styled.View`paddingTop: 4;`;

const RightSide = styled.View`
  flex: 1;
  flexDirection: column;
`;

const CardContentContainer = styled.View`
  paddingBottom: 8;
  minHeight: 60;
`;

const CardContentText = styled.Text`
  fontSize: 16;
  textAlign: left;
  fontWeight: 400;
  color: ${props => props.theme.SECONDARY};
`;

const text = 'topkek first tweet can this wrap around the side?';

function FeedCard() {
  return (
    <Root>
      <LeftSide>
        <AvatarContainer>
          <FeedCardAvatar />
        </AvatarContainer>
      </LeftSide>
      <RightSide>
        <FeedCardHeader />
        <CardContentContainer>
          <CardContentText>
            {text}
          </CardContentText>
        </CardContentContainer>
        <FeedCardBottom />
      </RightSide>
    </Root>
  );
}

export default FeedCard;

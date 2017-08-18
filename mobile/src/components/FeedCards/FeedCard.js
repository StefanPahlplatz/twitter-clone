import React from 'react';
import styled from 'styled-components/native';

import FeedCardHeader from './FeedCardHeader';
import FeedCardBottom from './FeedCardBottom';
import Avatar from '../Avatar';

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

function FeedCard({ text, user, createdAt, favoriteCount }) {
  return (
    <Root>
      <LeftSide>
        <AvatarContainer>
          <Avatar avatar={user.avatar} />
        </AvatarContainer>
      </LeftSide>
      <RightSide>
        <FeedCardHeader {...user} createdAt={createdAt} />
        <CardContentContainer>
          <CardContentText>
            {text}
          </CardContentText>
        </CardContentContainer>
        <FeedCardBottom favoriteCount={favoriteCount} />
      </RightSide>
    </Root>
  );
}

export default FeedCard;

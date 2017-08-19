import React, { Component } from 'react';
import styled from 'styled-components/native';

import { Avatar, Name, Meta } from '../components';

const Root = styled.TouchableOpacity`
  height: 60;
  backgroundColor: white;
  marginTop: 1;
  flexDirection: row;
`;

const AvatarWrapper = styled.View`
  justifyContent: center;
  paddingHorizontal: 8;
`;

const TextWrapper = styled.View`
  paddingVertical: 10;
  flexDirection: column;
`;

class SearchResult extends Component {
  render() {
    const { avatar, firstName, lastName, username } = this.props;
    return (
      <Root>
        <AvatarWrapper>
          <Avatar avatar={avatar} size={40} />
        </AvatarWrapper>
        <TextWrapper>
          <Name style={{ fontSize: 14 }}>
            {firstName} {lastName}
          </Name>
          <Meta style={{ fontSize: 14 }}>
            @{username}
          </Meta>
        </TextWrapper>
      </Root>
    );
  }
}

export default SearchResult;

import React, { Component } from 'react';
import styled from 'styled-components/native';
import { connect } from 'react-redux';

import Loading from '../Loading';
import { Avatar } from '../../components';

const Root = styled.View`
  position: relative;
  marginLeft: 20;
`;

const AvatarWrapper = styled.TouchableOpacity`
  marginTop: 40;
  marginBottom: 8;
`;

const Name = styled.Text`fontWeight: 600;`;

const Username = styled.Text`color: ${props => props.theme.LIGHT_GREY};`;

class DrawerTop extends Component {
  render() {
    if (!this.props.info) {
      return <Loading />;
    }
    const { firstName, lastName, username, avatar } = this.props.info;
    return (
      <Root>
        <AvatarWrapper>
          <Avatar avatar={avatar} size={60} />
        </AvatarWrapper>
        <Name>
          {firstName} {lastName}
        </Name>
        <Username>
          @{username}
        </Username>
      </Root>
    );
  }
}

export default connect(state => ({ info: state.user.info }))(DrawerTop);

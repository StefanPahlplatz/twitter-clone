import React, { Component } from 'react';
import styled from 'styled-components/native';
import { connectActionSheet } from '@expo/react-native-action-sheet';
import { withApollo } from 'react-apollo';
import { connect } from 'react-redux';

import { logout } from '../../actions/user';

const Root = styled.View`
  flex: 1;
  position: relative;
`;

const BottomView = styled.TouchableOpacity`
  position: absolute;
  bottom: 20;
  paddingVertical: 10;
  alignItems: center;
`;

const LogoutText = styled.Text`
  marginLeft: 20;
  marginRight: 20;
`;

class DrawerBottom extends Component {
  _onOpenActionSheet = () => {
    const options = ['Logout', 'Cancel'];
    const destructiveButtonIndex = 0;
    this.props.showActionSheetWithOptions(
      {
        options,
        destructiveButtonIndex,
      },
      buttonIndex => {
        if (buttonIndex === 0) {
          this.props.client.resetStore();
          return this.props.logout();
        }
      }
    );
  };

  render() {
    return (
      <Root>
        <BottomView onPress={this._onOpenActionSheet}>
          <LogoutText>Log out</LogoutText>
        </BottomView>
      </Root>
    );
  }
}
export default withApollo(
  connect(undefined, { logout })(connectActionSheet(DrawerBottom))
);

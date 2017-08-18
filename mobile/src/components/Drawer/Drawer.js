import React from 'react';
import styled from 'styled-components/native';

import DrawerTop from './DrawerTop';

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

const LogoutText = styled.Text`marginLeft: 20;`;

const DividerLine = styled.View`
  height: 1;
  backgroundColor: ${props => props.theme.WHITE_GREY}};
  marginVertical: 15;
`;

const Drawer = () =>
  <Root>
    <DrawerTop />
    <DividerLine />
    <BottomView>
      <LogoutText>Log out</LogoutText>
    </BottomView>
  </Root>;

export default Drawer;

import React from 'react';
import styled from 'styled-components/native';

import DrawerTop from './DrawerTop';
import DrawerBottom from './DrawerBottom';

const Root = styled.View`
  flex: 1;
  position: relative;
`;

const DividerLine = styled.View`
  height: 1;
  backgroundColor: ${props => props.theme.WHITE_GREY}};
  marginVertical: 15;
`;

const Drawer = () =>
  <Root>
    <DrawerTop />
    <DividerLine />
    <DrawerBottom />
  </Root>;

export default Drawer;

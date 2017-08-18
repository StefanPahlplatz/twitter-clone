import React from 'react';
import { DrawerNavigator } from 'react-navigation';
import MainStackNavigator from './MainStackNavigator';
import Drawer from '../components/Drawer/Drawer';

const MainDrawerNavigator = DrawerNavigator(
  {
    DrawerItem1: {
      screen: MainStackNavigator,
      navigationOptions: {
        drawerLabel: 'topkek',
      },
    },
  },
  {
    contentComponent: props => <Drawer {...props} />,
  }
);

export default MainDrawerNavigator;

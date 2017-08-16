import React from 'react';
import { DrawerNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import MainStackNavigator from './MainStackNavigator';

const MainDrawerNavigator = DrawerNavigator({
  DrawerItem1: {
    screen: MainStackNavigator,
    navigationOptions: {
      drawer: {
        label: 'Drawer 1',
        icon: ({ tintColor }) => <Icon name="rocket" size={24} />,
      },
    },
  },
});

export default MainDrawerNavigator;

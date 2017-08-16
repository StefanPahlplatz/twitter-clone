import React from 'react';
import { TabNavigator } from 'react-navigation';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import NotificationScreen from '../screens/NotificationScreen';
import MessageScreen from '../screens/MessageScreen';
import { colors } from '../utils/constants';

const TAB_ICON_SIZE = 21;

const iconStyle = {
  paddingBottom: 6,
};

const MainTabNavigator = TabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: () => ({
        headerTitle: 'Home',
        tabBarIcon: ({ tintColor }) =>
          <FontAwesome
            style={iconStyle}
            size={TAB_ICON_SIZE}
            color={tintColor}
            name="home"
          />,
      }),
    },
    Search: {
      screen: SearchScreen,
      navigationOptions: () => ({
        headerTitle: 'Search',
        tabBarIcon: ({ tintColor }) =>
          <FontAwesome
            style={iconStyle}
            size={TAB_ICON_SIZE}
            color={tintColor}
            name="search"
          />,
      }),
    },
    Notifications: {
      screen: NotificationScreen,
      navigationOptions: () => ({
        headerTitle: 'Notifications',
        tabBarIcon: ({ tintColor }) =>
          <FontAwesome
            style={iconStyle}
            size={TAB_ICON_SIZE}
            color={tintColor}
            name="bell"
          />,
      }),
    },
    Messages: {
      screen: MessageScreen,
      navigationOptions: () => ({
        headerTitle: 'Messages',
        tabBarIcon: ({ tintColor }) =>
          <MaterialIcons
            style={iconStyle}
            size={TAB_ICON_SIZE}
            color={tintColor}
            name="email"
          />,
      }),
    },
  },
  {
    lazy: false,
    tabBarPosition: 'top',
    swipeEnabled: true,
    tabBarOptions: {
      showIcon: true,
      showLabel: false,
      activeTintColor: colors.PRIMARY,
      inactiveTintColor: colors.LIGHT_GREY,
      pressColor: colors.LIGHT_GREY,
      style: {
        backgroundColor: colors.WHITE,
        height: 45,
      },
      indicatorStyle: {
        backgroundColor: colors.PRIMARY,
        height: 3,
      },
    },
  }
);

export default MainTabNavigator;

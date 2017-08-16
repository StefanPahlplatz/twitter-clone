import React, { Component } from 'react';
import {
  addNavigationHelpers,
  StackNavigator,
  TabNavigator,
} from 'react-navigation';
import { connect } from 'react-redux';
import { FontAwesome } from '@expo/vector-icons';
import Expo from 'expo';

import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import NotificationScreen from './screens/NotificationScreen';
import ProfileScreen from './screens/ProfileScreen';

import { colors } from './utils/constants';

const TAB_ICON_SIZE = 21;
const iconStyle = {
  paddingBottom: 6,
};

const Tabs = TabNavigator(
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
    Profile: {
      screen: ProfileScreen,
      navigationOptions: () => ({
        headerTitle: 'Profile',
        tabBarIcon: ({ tintColor }) =>
          <FontAwesome
            style={iconStyle}
            size={TAB_ICON_SIZE}
            color={tintColor}
            name="user"
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
        height: 40,
      },
      indicatorStyle: {
        backgroundColor: colors.PRIMARY,
        height: 3,
      },
    },
  }
);

const AppMainNav = StackNavigator(
  {
    Home: {
      screen: Tabs,
    },
  },
  {
    cardStyle: {
      backgroundColor: '#F1F6FA',
    },
    navigationOptions: () => ({
      headerStyle: {
        backgroundColor: colors.WHITE,
        elevation: 0,
      },
      headerTitleStyle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: colors.SECONDARY,
        marginTop: Expo.Constants.statusBarHeight,
      },
    }),
  }
);

class AppNavigator extends Component {
  render() {
    const nav = addNavigationHelpers({
      dispatch: this.props.dispatch,
      state: this.props.nav,
    });
    return <AppMainNav navigation={nav} />;
  }
}

export default connect(state => ({
  nav: state.nav,
}))(AppNavigator);

export const router = AppMainNav.router;
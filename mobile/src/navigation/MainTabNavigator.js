import React from 'react';
import { TabNavigator } from 'react-navigation';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { View, Text, TouchableOpacity } from 'react-native';
import { TextInput } from '../components';
import Expo from 'expo';

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
        header: ({ navigation }) =>
          <View
            style={{
              backgroundColor: colors.WHITE,
              elevation: 0,
              paddingTop: Expo.Constants.statusBarHeight + 5.8,
              paddingLeft: 16,
              flexDirection: 'row',
              height: 56,
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate('DrawerOpen')}
              style={{ paddingRight: 16 }}
            >
              <MaterialIcons name="menu" size={27} color={colors.PRIMARY} />
            </TouchableOpacity>
            <View
              style={{
                backgroundColor: '#e6ecf0',
                borderColor: '#ccd6dd',
                borderRadius: 20,
                width: 240,
                height: 25,
              }}
            >
              <TextInput
                style={{
                  color: '#657786',
                  marginTop: 4,
                  paddingLeft: 12,
                  fontSize: 12,
                }}
                placeholder="Search Twitter"
                placeholderTextColor="#657786"
              />
            </View>
          </View>,
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

import React from 'react';
import { StackNavigator } from 'react-navigation';
import Expo from 'expo';
import { TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { colors } from '../utils/constants';

import MainTabNavigator from './MainTabNavigator';

const MainStackNavigator = StackNavigator(
  {
    Home: {
      screen: MainTabNavigator,
    },
  },
  {
    cardStyle: {
      backgroundColor: '#F1F6FA',
    },
    navigationOptions: ({ navigation }) => ({
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.navigate('DrawerOpen')}>
          <MaterialIcons name="menu" size={27} color={colors.PRIMARY} />
        </TouchableOpacity>
      ),
      headerStyle: {
        backgroundColor: colors.WHITE,
        elevation: 0,
        paddingTop: Expo.Constants.statusBarHeight + 8,
        paddingLeft: 16,
      },
      headerTitleStyle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.SECONDARY,
      },
    }),
  }
);

export default MainStackNavigator;

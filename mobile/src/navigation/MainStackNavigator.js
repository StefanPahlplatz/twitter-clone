import { StackNavigator } from 'react-navigation';
import Expo from 'expo';

import MainTabNavigator from './MainTabNavigator';
import { colors } from '../utils/constants';

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
    navigationOptions: () => ({
      headerStyle: {
        backgroundColor: colors.WHITE,
        elevation: 0,
        paddingTop: Expo.Constants.statusBarHeight,
        paddingLeft: 8,
      },
      headerTitleStyle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.SECONDARY,
        paddingLeft: 16,
        paddingTop: 8,
      },
    }),
  }
);

export default MainStackNavigator;

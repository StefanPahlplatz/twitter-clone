import { StackNavigator } from 'react-navigation';
import Expo from 'expo';

import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';

import { colors } from '../utils/constants';

const LoginNavigator = StackNavigator(
  {
    Login: {
      screen: LoginScreen,
    },
    Register: {
      screen: RegisterScreen,
    },
  },
  {
    navigationOptions: () => ({
      headerTintColor: colors.WHITE,
      headerStyle: {
        backgroundColor: colors.SECONDARY,
        elevation: 0,
        paddingTop: Expo.Constants.statusBarHeight,
        height: 80,
      },
      headerTitleStyle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: colors.WHITE,
      },
    }),
  }
);

export default LoginNavigator;

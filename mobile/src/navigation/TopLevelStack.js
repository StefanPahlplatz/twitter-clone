import React from 'react';
import { StackNavigator } from 'react-navigation';
import { TouchableOpacity, Keyboard } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { colors } from '../utils/constants';

import MainDrawerNavigator from './MainDrawerNavigator';
import NewTweetModal from './NewTweetModal';

const TopLevelStack = StackNavigator({
  Home: {
    screen: MainDrawerNavigator,
    navigationOptions: {
      header: null,
    },
  },
  NewTweet: {
    screen: NewTweetModal,
    navigationOptions: ({ navigation }) => ({
      headerLeft: (
        <TouchableOpacity
          onPress={() => {
            navigation.goBack(null);
            Keyboard.dismiss();
          }}
        >
          <MaterialIcons name="close" size={27} color={colors.PRIMARY} />
        </TouchableOpacity>
      ),
      headerStyle: {
        backgroundColor: 'white',
        elevation: 0,
        height: 70,
        paddingTop: 32,
        paddingLeft: 16,
      },
    }),
  },
});

export default TopLevelStack;

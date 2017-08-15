import React, { Component } from 'react';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import Expo from 'expo';

import HomeScreen from './HomeScreen';
import SearchScreen from './SearchScreen';

class Main extends Component {
  render() {
    return (
      <ScrollableTabView style={{ marginTop: Expo.Constants.statusBarHeight }}>
        <HomeScreen tabLabel="Home" />
        <SearchScreen tabLabel="Search" />
      </ScrollableTabView>
    );
  }
}

export default Main;

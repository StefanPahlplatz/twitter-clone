import React, { Component } from 'react';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import Expo from 'expo';

import TabBar from '../components/TabBar';
import HomeScreen from './HomeScreen';
import SearchScreen from './SearchScreen';
import NotificationScreen from './NotificationScreen';

class Main extends Component {
  render() {
    return (
      <ScrollableTabView
        style={{ marginTop: Expo.Constants.statusBarHeight }}
        initialPage={0}
        renderTabBar={() => <TabBar />}
      >
        <HomeScreen tabLabel="home" />
        <SearchScreen tabLabel="search" />
        <NotificationScreen tabLabel="notifications-none" />
      </ScrollableTabView>
    );
  }
}

export default Main;

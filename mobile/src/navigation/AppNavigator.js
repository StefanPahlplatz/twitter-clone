import React, { Component } from 'react';
import { addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';

import LoginNavigator from './LoginNavigator';
import TopLevelStack from './TopLevelStack';

class AppNavigator extends Component {
  render() {
    const nav = addNavigationHelpers({
      dispatch: this.props.dispatch,
      state: this.props.nav,
    });
    if (!this.props.user.isAuthenticated) {
      return <LoginNavigator />;
    }
    return <TopLevelStack navigation={nav} />;
  }
}

export default connect(state => ({
  nav: state.nav,
  user: state.user,
}))(AppNavigator);

export const router = TopLevelStack.router;

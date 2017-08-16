import React from 'react';
import { UIManager, AsyncStorage } from 'react-native';
import { ApolloProvider } from 'react-apollo';
import { ThemeProvider } from 'styled-components';
import { AppLoading } from 'expo';

import { store, client } from './src/store';
import { colors } from './src/utils/constants';
import { login } from './src/actions/user';
import AppNavigator from './src/navigation';

if (UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      ready: false,
    };
  }

  componentWillMount() {
    this._checkIfAuthenticated();
  }

  _checkIfAuthenticated = async () => {
    try {
      const token = await AsyncStorage.getItem('twitterclone');
      if (token != null) {
        store.dispatch(login());
      }
    } catch (e) {
      throw e;
    }

    this.setState({ ready: true });
  };

  render() {
    if (!this.state.ready) {
      return <AppLoading />;
    }
    return (
      <ApolloProvider store={store} client={client}>
        <ThemeProvider theme={colors}>
          <AppNavigator />
        </ThemeProvider>
      </ApolloProvider>
    );
  }
}

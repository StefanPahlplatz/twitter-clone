import React, { Component } from 'react';
import styled from 'styled-components/native';

import { SearchResult } from '../components';
import { fakeAvatar } from '../utils/constants';

const Root = styled.View`
  backgroundColor: #f2f2f2;
  flex: 1;
`;

class SearchScreen extends Component {
  render() {
    return (
      <Root>
        <SearchResult
          avatar={fakeAvatar}
          firstName="Stefan"
          lastName="Pahlplatz"
          username="Stefan"
        />
        <SearchResult
          avatar={fakeAvatar}
          firstName="Stefan"
          lastName="Pahlplatz"
          username="Stefan"
        />
      </Root>
    );
  }
}

export default SearchScreen;

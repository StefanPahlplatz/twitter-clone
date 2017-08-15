import React, { Component } from 'react';
import styled from 'styled-components/native';

import FeedCard from '../components/FeedCards/FeedCard';

const Root = styled.View`
  backgroundColor: #f2f2f2;
  flex: 1;
  justifyContent: center;
`;

const List = styled.ScrollView``;

class HomeScreen extends Component {
  state = {};
  render() {
    return (
      <Root>
        <List>
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
        </List>
      </Root>
    );
  }
}

export default HomeScreen;

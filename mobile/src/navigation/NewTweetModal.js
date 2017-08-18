import { StackNavigator } from 'react-navigation';

import NewTweetScreen from '../screens/NewTweetScreen';

const NewTweetModal = StackNavigator(
  {
    NewTweet: {
      screen: NewTweetScreen,
    },
  },
  {
    headerMode: 'none',
  }
);

export default NewTweetModal;

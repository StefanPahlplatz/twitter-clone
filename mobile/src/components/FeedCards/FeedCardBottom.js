import React from 'react';
import styled from 'styled-components/native';
import {
  SimpleLineIcons,
  Entypo,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

import { colors } from '../../utils/constants';

const Root = styled.View`
  flexDirection: row;
  paddingBottom: 12;
`;

const Button = styled(TouchableOpacity)`
  flex: 1;
  justifyContent: flex-start;
  flexDirection: row;
`;

const IconWrapper = styled.View`paddingRight: 6;`;

const ButtonText = styled.Text`
  fontSize 14;
  color: ${props => props.theme.LIGHT_GREY};
`;

const ICON_SIZE = 19;
const favoriteCount = 3;
const isFavorite = false;

const FeedCardBottom = () =>
  <Root>
    <Button>
      <IconWrapper>
        <SimpleLineIcons
          name="bubble"
          size={ICON_SIZE}
          color={colors.LIGHT_GREY}
        />
      </IconWrapper>
      <ButtonText>
        {favoriteCount}
      </ButtonText>
    </Button>
    <Button>
      <IconWrapper>
        <Entypo name="retweet" size={ICON_SIZE} color={colors.LIGHT_GREY} />
      </IconWrapper>
      <ButtonText>
        {favoriteCount}
      </ButtonText>
    </Button>
    <Button>
      <IconWrapper>
        <Entypo
          name={isFavorite ? 'heart' : 'heart-outlined'}
          size={ICON_SIZE}
          color={isFavorite ? 'red' : colors.LIGHT_GREY}
        />
      </IconWrapper>
      <ButtonText>
        {favoriteCount}
      </ButtonText>
    </Button>
    <Button>
      <MaterialCommunityIcons
        name="email-outline"
        size={ICON_SIZE}
        color={colors.LIGHT_GREY}
      />
    </Button>
  </Root>;

export default FeedCardBottom;

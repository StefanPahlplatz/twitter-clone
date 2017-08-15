import React from 'react';
import { StyleSheet, View, TouchableOpacity, Animated } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { colors } from '../utils/constants';

const TabBar = React.createClass({
  tabIcons: [],

  propTypes: {
    goToPage: React.PropTypes.func,
    activeTab: React.PropTypes.number,
    tabs: React.PropTypes.array,
  },

  componentDidMount() {
    this._listener = this.props.scrollValue.addListener(this.setAnimationValue);
  },

  setAnimationValue({ value }) {
    this.tabIcons.forEach((icon, i) => {
      const progress = Math.min(1, Math.abs(value - i));
      icon.setNativeProps({
        style: {
          color: this.iconColor(progress),
        },
      });
    });
  },

  // color between rgb(85,172,238) and rgb(204,204,204)
  iconColor(progress) {
    const red = 85 + (204 - 85) * progress;
    const green = 172 + (204 - 172) * progress;
    const blue = 238 + (204 - 238) * progress;
    return `rgb(${red}, ${green}, ${blue})`;
  },

  render() {
    const containerWidth = this.props.containerWidth;
    const numberOfTabs = this.props.tabs.length;
    const tabUnderlineStyle = {
      position: 'absolute',
      width: containerWidth / numberOfTabs,
      height: 3,
      backgroundColor: colors.PRIMARY,
      bottom: -1,
    };

    const left = {
      transform: [
        {
          translateX: this.props.scrollValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0, containerWidth / numberOfTabs],
          }),
        },
      ],
    };

    return (
      <View style={[styles.tabs, this.props.style]}>
        {this.props.tabs.map((tab, i) =>
          <TouchableOpacity
            key={tab}
            onPress={() => this.props.goToPage(i)}
            style={styles.tab}
          >
            <MaterialIcons
              name={tab}
              size={25}
              color={
                this.props.activeTab === i
                  ? 'rgb(85,172,238)'
                  : 'rgb(204,204,204)'
              }
              ref={icon => {
                this.tabIcons[i] = icon;
              }}
            />
          </TouchableOpacity>
        )}
        <Animated.View
          style={[tabUnderlineStyle, left, this.props.underlineStyle]}
        />
      </View>
    );
  },
});

const styles = StyleSheet.create({
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 4,
  },
  tabs: {
    height: 45,
    flexDirection: 'row',
    paddingTop: 5,
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    elevation: 1,
    borderBottomColor: 'rgba(0,0,0,0.05)',
  },
});

export default TabBar;

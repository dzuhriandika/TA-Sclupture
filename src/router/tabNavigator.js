/* eslint-disable no-unused-vars */
import React, {Component} from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {HomeStack, GalleryStack, ProfileStack} from './stackNavigator';

export const AppStack = createBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="ios-home" color={tintColor} size={25} />
        ),
      },
    },
    Gallery: {
      screen: GalleryStack,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="ios-list" color={tintColor} size={25} />
        ),
      },
    },
    Profile: {
      screen: ProfileStack,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="ios-person" color={tintColor} size={25} />
        ),
      },
    },
  },
  {
    initialRouteName: 'Home',
    activeColor: '#f0edf6',
    inactiveColor: '#3e2465',
    labeled: true,
    shifting: false,
    tabBarOptions: {
      activeTintColor: '#EF883D',
      showLabel: true,
      style: {
        backgroundColor: 'white',
      },
    },
  },
);

export default AppStack;

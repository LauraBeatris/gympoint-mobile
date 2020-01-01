import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Signin from '~/pages/SignIn';
import Checkin from '~/pages/Checkin';
import HelpOrder from '~/pages/HelpOrder';
import ViewHelpOrder from '~/pages/HelpOrder/View';
import CreateHelpOrder from '~/pages/HelpOrder/New';

import theme from '~/styles/theme';

export default (signedIn = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Signin,
        App: createBottomTabNavigator(
          {
            Checkins: {
              screen: createStackNavigator(
                {
                  Checkin,
                },
                {
                  defaultNavigationOptions: {
                    headerTransparent: false,
                    headerTintColor: '#000',
                    headerLeftContainerStyle: {
                      marginLeft: 20,
                    },
                    headerTitleStyle: {
                      alignSelf: 'center',
                    },
                    headerStyle: {
                      backgroundColor: theme.white,
                    },
                  },
                }
              ),
              navigationOptions: {
                tabBarLabel: 'Check-ins',
                tabBarIcon: ({ tintColor }) => (
                  <Icon name="edit-location" size={20} color={tintColor} />
                ),
              },
            },
            HelpOrders: {
              screen: createStackNavigator(
                {
                  HelpOrder,
                  CreateHelpOrder,
                  ViewHelpOrder,
                },
                {
                  defaultNavigationOptions: {
                    headerTransparent: false,
                    headerTintColor: '#000',
                    headerLeftContainerStyle: {
                      marginLeft: 20,
                    },
                  },
                }
              ),
              navigationOptions: {
                tabBarLabel: 'Pedir ajuda',
                tabBarIcon: ({ tintColor }) => (
                  <Icon name="live-help" size={20} color={tintColor} />
                ),
              },
            },
          },
          {
            tabBarOptions: {
              keyboardHidesTabBar: true,
              activeTintColor: theme.primary,
              inactiveTintColor: theme.textLight,
              style: {
                backgroundColor: theme.white,
              },
              headerTitleStyle: {
                alignSelf: 'center',
              },
              headerStyle: {
                backgroundColor: theme.white,
              },
            },
          }
        ),
      },
      {
        initialRouteName: signedIn ? 'App' : 'Signin',
      }
    )
  );

import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import React from 'react';  
import Icon from 'react-native-vector-icons/MaterialIcons';
import { View } from 'react-native';

import Login from '../screens/login';
import Tickets from '../screens/tickets';
import ImagePickerScreen from '../screens/test';

const routes = {
  login: {
    screen: Login,
    navigationOptions: () => ({
        tabBarIcon: ({tintColor}) => (<Icon name="home" color={tintColor} size={24} />)
    })
  },
  tickets: { 
    screen: Tickets,
    navigationOptions: () => ({
        tabBarIcon: ({tintColor}) => (<Icon name="photo-camera" color={tintColor} size={24} />)
    })
  },
  other: { 
    screen: ImagePickerScreen,
    navigationOptions: () => ({
        tabBarIcon: ({tintColor}) => (<Icon name="collections" color={tintColor} size={24} />)
    })
  }
};

const tabConfig = {
  initialRouteName: 'login',
  activeColor: 'white',
  inactiveColor: 'grey',
  labeled: false,
  barStyle: {
    backgroundColor: '#171F33'
  }
};

const BottomTabNavigator = createMaterialBottomTabNavigator(routes, tabConfig);

const Navigation = createAppContainer(BottomTabNavigator);

export default Navigation;

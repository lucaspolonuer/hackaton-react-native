import React from 'react';
import {AppRegistry} from 'react-native';
import Navigation from './src/config/navigation';

class App extends React.Component {
  render() {
    return <Navigation />;
  }
};

AppRegistry.registerComponent("AwesomeProject", () => App);

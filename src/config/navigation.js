import {createStackNavigator, createAppContainer} from 'react-navigation';
import Login from '../screens/login'

const MainNavigator = createStackNavigator({
  login: {
    screen: Login
  },
  initialRouteName: 'login'
});

const Navigation = createAppContainer(MainNavigator);

export default Navigation;
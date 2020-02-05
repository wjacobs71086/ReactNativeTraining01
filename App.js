import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import ComponentsScreen from './src/screens/screens/ComponentsScreen';
import ListScreen from './src/screens/screens/ListScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
  },
  {
    initialRouteName: 'List',
    defaultNavigationOptions: {
      title: 'Native'
    }
  }
);

export default createAppContainer(navigator);

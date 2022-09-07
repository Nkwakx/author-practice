import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import DashboardScreen from './DashboardScreen'

    const navigator = createStackNavigator(
        {
          Home: DashboardScreen,
        },
          {
            initialRouteName: "Home",
            defaultNavigationOptions: {
            title: "Work Assignment" }
          }
      )
      
export default createAppContainer (navigator)
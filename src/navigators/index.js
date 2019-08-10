import { createStackNavigator, createAppContainer } from 'react-navigation';

import * as configs from '../configs';
import { Settings } from '../features';

const AppNavigator = createStackNavigator(
	{
		[configs.screens.name.SETTINGS]: {
			screen: Settings
		}
	},
	{
		initialRouteName: configs.screens.name.SETTINGS,
		defaultNavigationOptions: {
			headerStyle: {
				backgroundColor: 'rgb(43, 51, 124)'
			},
			headerTintColor: '#fff',
			headerTitleStyle: {
				fontWeight: 'bold'
			}
		}
	}
);

export default createAppContainer(AppNavigator);

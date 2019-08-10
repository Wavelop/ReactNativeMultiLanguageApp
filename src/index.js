import React, { Component } from 'react';
import { Provider as StoreProvider } from 'react-redux';
import { Image } from 'react-native';

// This import cannot be done ./components
import store from './store';
import ApplicationNavigator from './navigators';

export default class App extends Component {
	render() {
		return (
			<StoreProvider store={store}>
				<ApplicationNavigator />
			</StoreProvider>
		);
	}
}

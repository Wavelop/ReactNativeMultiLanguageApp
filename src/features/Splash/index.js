import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';

import styles from './styles';
import { ConnectedComponent as connect } from '../../components';

class Splash extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return <View />;
	}
}

export default connect(Splash);

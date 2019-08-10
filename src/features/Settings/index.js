import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import {
	ConnectedComponent as connect,
	LanguageSwitcher
} from '../../components';
import styles from './styles';

class Settings extends Component {
	static navigationOptions = {
		headerTitle: (
			<Image
				source={require('../../assets/images/wavelop_white.png')}
				style={{ width: 50, height: 50 }}
			/>
		)
	};
	render() {
		const { intlData } = this.props;

		return (
			<View>
				<LanguageSwitcher {...this.props} />
				<Text style={styles.translations}>
					{intlData.messages['welcome']}
				</Text>
				<Text style={styles.translations}>
					{intlData.messages['hello']}
				</Text>
				<Text style={styles.translations}>
					{intlData.messages['howareyou']}
				</Text>
			</View>
		);
	}
}

export default connect(Settings);

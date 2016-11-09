import React, { Component, PropTypes } from 'react';
import { View, Text, Image, Linking, StyleSheet } from 'react-native';
import { Card, CardActions, Button, COLOR, TYPO } from 'react-native-material-design';

import AppStore from '../stores/AppStore';

export default class Welcome extends Component {

	static contextTypes = {
		navigator: PropTypes.object.isRequired
	};

	render() {
		const { navigator } = this.context;
		const theme = AppStore.getState().theme;

		return (
			<View>
				<Card>
					<Card.Media
						image={<Image source={require('./../img/welcome.jpg')} />}
						overlay
						>
						<Text style={[TYPO.paperFontHeadline, COLOR.paperGrey50]}>Welcome</Text>
						<Text style={[TYPO.paperSubhead, COLOR.paperGrey50]}>React Native Material Design</Text>
					</Card.Media>
					<Card.Body>
						<Text>To get started, vist the documentation over at Github! This page is an example of the Card component.</Text>
					</Card.Body>
					<Card.Actions position="right">
						<Button primary={theme} text="GO TO GITHUB" onPress={() => Linking.openURL('https://github.com/thomasooo/demo-app')} />
					</Card.Actions>
				</Card>
				<Card>
					<Card.Body>
						<Text>If you find any issues or potential improvements please submit an issue on the GitHub repository page.</Text>
					</Card.Body>
				</Card>
				<Button text="Go to child component" primary={theme} onPress={() => { navigator.forward('example') }} />
			</View>
		);
	}

}

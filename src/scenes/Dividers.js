import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { Subheader, Divider } from 'react-native-material-design';

export default class Subheaders extends Component {

	render() {
		return (
			<ScrollView>
				<Subheader text="Normal Divider"/>
				<Divider />
				<Subheader text="Divider with inset"/>
				<Divider inset />
			</ScrollView>
		);
	}
}

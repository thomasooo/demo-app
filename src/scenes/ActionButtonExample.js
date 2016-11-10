import React, { Component, PropTypes } from 'react';
import { View, StyleSheet } from 'react-native';
import { Subheader } from 'react-native-material-design';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

//import AppStore from '../stores/AppStore';

export default class ActionButtonExample extends Component {

	render() {
//		const theme = AppStore.getState().theme;

		return (
			<View style={{flex:1, backgroundColor: '#f3f3f3'}}>
				<Subheader text="Sample use of ActionButton"/>
				<ActionButton onPress={() => { console.log("hi")}} buttonColor="rgba(231,76,60,1)">
					<ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={() => console.log("notes tapped!")}>
						<Icon name="md-create" style={styles.actionButtonIcon} />
					</ActionButton.Item>
					<ActionButton.Item buttonColor='#3498db' title="Notifications" onPress={() => {}}>
						<Icon name="md-notifications-off" style={styles.actionButtonIcon} />
					</ActionButton.Item>
					<ActionButton.Item buttonColor='#1abc9c' title="All Tasks" onPress={() => {}}>
						<Icon name="md-done-all" style={styles.actionButtonIcon} />
					</ActionButton.Item>
				</ActionButton>
			</View>
		);
	}

}

const styles = StyleSheet.create({
	actionButtonIcon: {
		fontSize: 20,
		height: 22,
		color: 'white',
	},
});

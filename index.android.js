import React, {Component } from 'react';
import {AppRegistry, Navigator, DrawerLayoutAndroid, ScrollView, View, Text, StatusBar } from 'react-native';

import Navigate from './src/utils/Navigate';
import { Toolbar } from './src/components';
import Navigation from './src/scenes/Navigation';
import Welcome from './src/scenes/Welcome';
import AppStore from './src/stores/AppStore';
import { COLOR } from 'react-native-material-design';

class Application extends Component {

	static childContextTypes = {
		drawer: React.PropTypes.object,
		navigator: React.PropTypes.object
	};

	constructor(props) {
		super(props);
		this.state = {
			drawer: null,
			navigator: null,
			theme: AppStore.getState().theme
		};
	}

	getChildContext = () => {
		return {
			drawer: this.state.drawer,
			navigator: this.state.navigator
		}
	};

	setDrawer = (drawer) => {
		this.setState({
			drawer
		});
	};

	setNavigator = (navigator) => {
		this.setState({
			navigator: new Navigate(navigator)
		});
	};

	componentDidMount = () => {
		AppStore.listen(this.handleAppStore);
	};

	componentWillUnmount() {
		AppStore.unlisten(this.handleAppStore);
	}

	handleAppStore = (store) => {
		this.setState({
			theme: store.theme
		});
	};

	render() {
		let { drawer, navigator } = this.state;
		let navView = React.createElement(Navigation);
		let statusbarColor = 'black';

		try {
			statusbarColor = COLOR[`${this.state.theme}700`].color
		} catch (e) {

		}

		return (
			<DrawerLayoutAndroid
				drawerWidth={300}
				drawerPosition={DrawerLayoutAndroid.positions.Left}
				renderNavigationView={() => {
					if (drawer && navigator) {
						return navView;
					}
					return null;
				}}
				ref={(drawer) => { !this.state.drawer ? this.setDrawer(drawer) : null }}
				>
				<StatusBar
					backgroundColor={statusbarColor}
					barStyle="light-content"
					/>
				{drawer &&
					<Navigator
						initialRoute={Navigate.getInitialRoute()}
						navigationBar={<Toolbar onIconPress={drawer.openDrawer} />}
						configureScene={() => {
							return Navigator.SceneConfigs.FadeAndroid;
						}}
						ref={(navigator) => { !this.state.navigator ? this.setNavigator(navigator) : null }}
						renderScene={(route) => {
							if (this.state.navigator && route.component) {
								return (
									<View
										style={styles.scene}
										showsVerticalScrollIndicator={false}>
										<route.component title={route.title} path={route.path} {...route.props} />
									</View>
								);
							}
						}}
						/>
				}
			</DrawerLayoutAndroid>
		);
	}
}

AppRegistry.registerComponent('MaterialDesignProject', () => Application);

const styles = {
	scene: {
		flex: 1,
		marginTop: 56
	}
};

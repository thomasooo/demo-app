import React, { Component, PropTypes } from 'react';
import { Text, View } from 'react-native';
import { Toolbar as MaterialToolbar } from 'react-native-material-design';
import AppStore from '../stores/AppStore';

export default class Toolbar extends Component {

	static contextTypes = {
		navigator: PropTypes.object
	};

	static propTypes = {
		onIconPress: PropTypes.func.isRequired
	};

	constructor(props) {
		super(props);
		this.state = {
			title: AppStore.getState().routeName,
			theme: AppStore.getState().theme,
			counter: 0,
			counter2: 0,
		};
	}

	increment = () => {
		this.setState({
			counter: this.state.counter + 1
		});
	};

	increment2 = () => {
		this.setState({
			counter2: this.state.counter2 + 1
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
			title: store.routeName,
			theme: store.theme
		});
	};

	render() {
		const { navigator } = this.context;
		const { theme, counter, counter2 } = this.state;
		const { onIconPress } = this.props;

		return (
			<MaterialToolbar
				title={navigator && navigator.currentRoute ? navigator.currentRoute.title : 'Welcome'}
				primary={theme}
				icon={navigator && navigator.isChild ? 'keyboard-backspace' : 'menu'}
				onIconPress={() => navigator && navigator.isChild ? navigator.back() : onIconPress()}
				actions={[{
					icon: 'warning',
					badge: { value: counter, animate: true },
					onPress: this.increment
				},{
					icon: 'loop',
					badge: { value: counter2, animate: true },
					onPress: this.increment2
				}]}
				rightIconStyle={{
					margin: 10
				}}
				/>
		);
	}
}

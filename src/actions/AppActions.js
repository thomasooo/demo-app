import alt from '../alt';
import StatusBarAndroid from 'react-native-android-statusbar';
import { COLOR } from 'react-native-material-design';

class AppActions {

	updateTheme(name) {
		/* TODO
		let hexColor = 'black';
		try {
			hexColor = COLOR[`${name}700`].color;
			StatusBarAndroid.setHexColor(hexColor);
		} catch (e) {

		}
		*/
		return name;
	}

}

export default alt.createActions(AppActions);

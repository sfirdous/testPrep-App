import { AppRegistry } from 'react-native';
import App from './App'
import { name as appName } from './app.json';
import './src/i18n/i18.config'

AppRegistry.registerComponent(appName, () => App);

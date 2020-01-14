import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../screens/home';
import DetaisListScreen from '../screens/detaislist';
import QrcodeScreen from '../screens/qrcode';
import FullDetaisScreen from '../screens/fulldetails';

const MainNavigator = createStackNavigator(
    {
        HomeScreen: {
            screen: HomeScreen,
        },
        DetaisListScreen: {
            screen: DetaisListScreen,
        },
        QrcodeScreen: {
            screen: QrcodeScreen,
        },
        FullDetaisScreen: {
            screen: FullDetaisScreen,
        },
    },
    {
        initialRouteName: 'HomeScreen',
        headerMode: 'none',
    },
);
const Router = createAppContainer(MainNavigator);
export default Router;
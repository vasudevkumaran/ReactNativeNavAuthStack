import {createAppContainer,createStackNavigator,createSwitchNavigator} from 'react-navigation';
import Login from './screens/Login';
import Register from './screens/Register';
import Main from './screens/Main';
import Next from './screens/Next';
import Loading from './screens/Loading';

const AuthRoute = createStackNavigator({
    Login:{screen:Login},
    Register:{screen:Register}
});

const MainRoute = createStackNavigator({
    Home:{screen:Main},
    Next:{screen:Next}
});

const StackNavigator = createSwitchNavigator(
    {
        AuthStack:{screen:AuthRoute},
        HomeStack:{screen:MainRoute},
        Loading:{screen:Loading}
    },
    {
        initialRouteName:'Loading'
    }
);

const AppContainer = createAppContainer(StackNavigator);

export default AppContainer;
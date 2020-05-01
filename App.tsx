import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// Implementation of HomeScreen, OtherScreen, SignInScreen, AuthLoadingScreen
// goes here.

import HomeStack from './src/AppStack/AppStack';
import SignInScreen from './src/Authentication/SignInScreen';
import SignUpScreen from './src/Authentication/SignUpScreen';

import AuthLoadingScreen from './src/AuthLoading/AuthLoading';

const AppStack = createStackNavigator({ Home: HomeStack }, { headerMode: 'none' });
const AuthStack = createStackNavigator({ SignIn: SignInScreen, SignUp: SignUpScreen });

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',

    }
  )
);
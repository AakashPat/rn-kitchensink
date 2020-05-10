import React from "react";
import { StatusBar } from "react-native";
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// Implementation of HomeScreen, OtherScreen, SignInScreen, AuthLoadingScreen
// goes here.

import HomeStack from './src/AppStack/AppStack';
import SignInScreen, { signInAssets } from './src/Authentication/SignInScreen';
import SignUpScreen from './src/Authentication/SignUpScreen';
import AuthLoadingScreen from './src/AuthLoading/AuthLoading';
import LoadAssets from './src/components/LoadAssets';

const assets: number[] = [
  ...signInAssets
  // ...examples.map((example) => example.source),
  // ...sliderAssets,
  // ...transformAssets,
];
const fonts = {
  "Oswald-Bold": require("./assets/fonts/oswald_bold.ttf"),
  "Oswald-Medium": require("./assets/fonts/medium.ttf"),
  "Oswald-Regular": require("./assets/fonts/oswald_regular.ttf"),
};

const AppStack = createStackNavigator({ Home: HomeStack }, { headerMode: 'none' });
const AuthStack = createStackNavigator({ SignIn: SignInScreen, SignUp: SignUpScreen });

const AppContainer = createAppContainer(
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

export default () => (
  <LoadAssets {...{ assets, fonts }}>
    {/* <StatusBar barStyle="light-content" /> */}
    <AppContainer />
  </LoadAssets>
);

import React from 'react';
import { Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from './Home/HomeScreen';
import TeamScreen from './Team/TeamScreen';
import TrainingScreen from './Training/TrainingScreen';
import ProfileScreen from './Profile/ProfileScreen';

class SettingsScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Settings!</Text>
            </View>
        );
    }
}

const TabNavigator = createBottomTabNavigator({
    Home: HomeScreen,
    Team: TeamScreen,
    Training: TrainingScreen,
    Profile: ProfileScreen,
},
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let IconComponent = Ionicons;
                let AntDesignComponent = AntDesign;
                let MaterialCommunityIconsComponent = MaterialCommunityIcons;
                let iconName;
                if (routeName === 'Home') {
                    iconName = focused
                        ? 'md-home'
                        : 'md-home';
                    return <IconComponent name={iconName} size={25} color={tintColor} />;
                } else if (routeName === 'Team') {
                    iconName = focused ? 'team' : 'team';
                    return <AntDesignComponent name={iconName} size={25} color={tintColor} />;
                } else if (routeName === 'Training') {
                    iconName = focused ? 'md-stopwatch' : 'md-stopwatch';
                    return <IconComponent name={iconName} size={25} color={tintColor} />;
                } else if (routeName === 'Profile') {
                    iconName = focused ? 'account-circle' : 'account-circle';
                    return <MaterialCommunityIconsComponent name={iconName} size={25} color={tintColor} />;
                }

                // You can return any component that you like here!

            },
        }),
        tabBarOptions: {
            activeTintColor: '#EEFC68',
            inactiveTintColor: 'gray',
            style: {
                backgroundColor: 'black',
            },
        },
    });

export default createAppContainer(TabNavigator);
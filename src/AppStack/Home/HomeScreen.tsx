// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import React, { Component } from 'react';
import { View, Button, AsyncStorage } from "react-native";

// export default function App() {
//     return (
//         <View style={styles.container}>
//             <Text>Open up App.tsx to start working on your app!</Text>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
// });

interface Props {
    navigation: any
}

export default class HomeScreen extends Component<Props> {
    static navigationOptions = {
        title: 'Welcome to the app!',
    };

    render() {
        return (
            <View>
                <Button title="Show me more of the app" onPress={this._showMoreApp} />
                <Button title="Actually, sign me out :)" onPress={this._signOutAsync} />
            </View>
        );
    }

    _showMoreApp = () => {
        this.props.navigation.navigate('Other');
    };

    _signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    };
}
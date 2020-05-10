import React, { Component } from 'react';
import { Text, View, Button, AsyncStorage, StyleSheet, TextInput, TouchableHighlight, TouchableWithoutFeedback, ImageBackground, Image } from "react-native";
const axios = require('axios');

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    inputField: {
        width: 300,
        height: 40,
        fontSize: 18,
        borderColor: 'white',
        borderBottomWidth: 1,
        marginTop: 30,
        color: 'white',
        fontFamily: 'Oswald-Medium'
    },
    ctaButton: {
        backgroundColor: '#EEFC68',
        paddingVertical: 10,
        paddingHorizontal: 60,
        marginTop: 30,
        borderRadius: 8
    },
    ctaText: {
        color: 'black',
        fontSize: 24,
        fontFamily: 'Oswald-Medium',
        textAlign: 'center'
    },
    signUpText: {
        color: 'white',
        opacity: 70,
        marginTop: 40,
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Oswald-Medium',
        textAlign: 'center'
    },
    signUpCta: {
        color: '#EEFC68',
    }
});

export const signInAssets = [
    // require("../../ ../../assets/auth/auth-background@3x.png")
    // require('../../assets/auth/auth-background@3x.png')
];


const SignInScreen = ({ navigation }) => {
    const [email, onChangeEmail] = React.useState('');
    const [password, onChangePassword] = React.useState('');


    const _signInAsync = async () => {
        fetch('http://192.168.0.55:3000/user/login', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: email,
                password: password
            })
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
            })
            .catch((error) => {
                console.error(error);
            });

    };

    const _navigateToSignUp = async () => {
        console.log('Navigate to SignUp')
        navigation.navigate('SignUp');
    };


    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/auth-background.imageset/auth-background.png')} style={styles.backgroundImage}>
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Image source={require('../../assets/logo.imageset/logo.png')}></Image>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'flex-start', marginHorizontal: 40 }}>
                        <TextInput
                            placeholder="Phone / Email"
                            placeholderTextColor="#fff"
                            style={styles.inputField}
                            onChangeText={email => onChangeEmail(email)}
                            value={email}
                        />
                        <TextInput
                            placeholder="Your Password"
                            placeholderTextColor="#fff"
                            style={styles.inputField}
                            onChangeText={password => onChangePassword(password)}
                            value={password}
                        />
                        <TouchableHighlight style={styles.ctaButton} onPress={_signInAsync}>
                            <Text style={styles.ctaText}>
                                Sign In
                            </Text>
                        </TouchableHighlight>

                        <Text style={styles.signUpText}>
                            Not registered?
                            <TouchableWithoutFeedback onPress={_navigateToSignUp}>
                                <Text style={styles.signUpCta}> Sign Up</Text>
                            </TouchableWithoutFeedback>
                        </Text>
                    </View>
                </View>

            </ImageBackground>
        </View>
    );
}

SignInScreen.navigationOptions = {
    headerShown: false
};

export default SignInScreen
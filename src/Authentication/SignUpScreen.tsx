import React, { Component } from 'react';

import { Text, View, Button, AsyncStorage, StyleSheet, TextInput, TouchableHighlight, TouchableWithoutFeedback } from "react-native";

interface Props {
    navigation: any
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#222222',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputField: {
        width: 300,
        height: 40,
        fontSize: 16,
        borderColor: 'white',
        borderBottomWidth: 1,
        marginTop: 30,
        color: 'white'
    },
    ctaButton: {
        backgroundColor: '#EEFC68',
        paddingVertical: 15,
        paddingHorizontal: 60,
        marginTop: 40,
        borderRadius: 8
    },
    ctaText: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 18
    },
    signUpText: {
        color: 'white',
        opacity: 70,
        marginTop: 40,
        fontSize: 18,
        fontWeight: 'bold'
    },
    signUpCta: {
        color: '#EEFC68'
    }
});


const SignUpScreen = ({ navigation }) => {
    const [email, onChangeEmail] = React.useState('');
    const [password, onChangePassword] = React.useState('');


    const _signInAsync = async () => {
        await AsyncStorage.setItem('userToken', 'abc');
        navigation.navigate('App');
    };

    const _navigateToSignIn = async () => {
        console.log('Navigate to SignIn')
        navigation.navigate('SignIn');
    };


    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Your Email"
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
                    Sign Up
                </Text>
            </TouchableHighlight>

            <Text style={styles.signUpText}>
                already have an account?
                <TouchableWithoutFeedback onPress={_navigateToSignIn}>
                    <Text style={styles.signUpCta}> Sign In</Text>
                </TouchableWithoutFeedback>
            </Text>

        </View>
    );
}

SignUpScreen.navigationOptions = {
    title: 'Please sign up',
};

export default SignUpScreen
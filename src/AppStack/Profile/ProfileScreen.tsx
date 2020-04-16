import React, { Component } from 'react';
import { View, Button, AsyncStorage, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const ProfileScreen = ({ navigation }) => {

    const _signOutAsync = async () => {
        await AsyncStorage.clear();
        navigation.navigate('Auth');
    };
    return (
        <View>
            <Button title="Actually, sign me out :)" onPress={_signOutAsync} />
        </View>
    );
}

ProfileScreen.navigationOptions = {
    title: 'Profile',
};

export default ProfileScreen;
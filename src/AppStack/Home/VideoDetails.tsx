import React, { Component } from 'react';
import { View, Text, AsyncStorage, StyleSheet, SafeAreaView, ImageBackground } from "react-native";
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E4E4E4',
        justifyContent: 'center',
    },
    videoItemWrapper: {
        flex: 1,
        backgroundColor: '#ffffff',
        padding: 15,
        display: 'flex',
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    videoContainer: {
        flex: 1,
        backgroundColor: 'green',
        borderRadius: 8,
        height: 150
    },
    infoContainer: {
        flex: 1,
        paddingHorizontal: 15,
        justifyContent: 'space-between'
    },
    dateText: {
        fontSize: 13
    },
    titleText: {
        fontSize: 16,
        marginTop: 12
    },
    playerText: {
        fontSize: 13
    }
});

const HomeScreen = ({ navigation }) => {
    const VIDEOS = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            date: '2018-October-18',
            title: '3v3: In game style, how to deal with ball, Survivors of the game',
            imageUrl: {
                uri: "https://images.theconversation.com/files/276773/original/file-20190528-42551-1e4xpxo.jpg"
            },
            players: [{
                id: 1,
                name: 'Adam Koma'
            },
            {
                id: 2,
                name: 'Brajan O Nil'
            }]
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bb',
            date: '2018-October-18',
            title: '3v3: In game style, how to deal with ball, Survivors of the game',
            imageUrl: {
                uri: "https://images.theconversation.com/files/276773/original/file-20190528-42551-1e4xpxo.jpg"
            },
            players: [{
                id: 1,
                name: 'Adam Koma'
            },
            {
                id: 2,
                name: 'Brajan O Nil'
            }]
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bc',
            date: '2018-October-18',
            title: '3v3: In game style, how to deal with ball, Survivors of the game',
            imageUrl: {
                uri: "https://images.theconversation.com/files/276773/original/file-20190528-42551-1e4xpxo.jpg"
            },
            players: [{
                id: 1,
                name: 'Adam Koma'
            },
            {
                id: 2,
                name: 'Brajan O Nil'
            }]
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bd',
            date: '2018-October-18',
            title: '3v3: In game style, how to deal with ball, Survivors of the game',
            imageUrl: {
                uri: "https://images.theconversation.com/files/276773/original/file-20190528-42551-1e4xpxo.jpg"
            },
            players: [{
                id: 1,
                name: 'Adam Koma'
            },
            {
                id: 2,
                name: 'Brajan O Nil'
            }]
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28be',
            date: '2018-October-18',
            title: '3v3: In game style, how to deal with ball, Survivors of the game',
            imageUrl: {
                uri: "https://images.theconversation.com/files/276773/original/file-20190528-42551-1e4xpxo.jpg"
            },
            players: [{
                id: 1,
                name: 'Adam Koma'
            },
            {
                id: 2,
                name: 'Brajan O Nil'
            }]
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bf',
            date: '2018-October-18',
            title: '3v3: In game style, how to deal with ball, Survivors of the game',
            imageUrl: {
                uri: "https://images.theconversation.com/files/276773/original/file-20190528-42551-1e4xpxo.jpg"
            },
            players: [{
                id: 1,
                name: 'Adam Koma'
            },
            {
                id: 2,
                name: 'Brajan O Nil'
            }]
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bg',
            date: '2018-October-18',
            title: '3v3: In game style, how to deal with ball, Survivors of the game',
            imageUrl: {
                uri: "https://images.theconversation.com/files/276773/original/file-20190528-42551-1e4xpxo.jpg"
            },
            players: [{
                id: 1,
                name: 'Adam Koma'
            },
            {
                id: 2,
                name: 'Brajan O Nil'
            }]
        },
    ];

    const _renderVideo = ({ item }) => {
        return (
            <TouchableOpacity style={styles.videoItemWrapper}>
                <ImageBackground imageStyle={{ borderRadius: 8 }} style={styles.videoContainer} source={item.imageUrl}>
                </ImageBackground>
                <View style={styles.infoContainer}>
                    <View style={styles.infoBox}>
                        <Text style={styles.dateText}>
                            {item.date}
                        </Text>
                        <Text style={styles.titleText}>
                            {item.title}
                        </Text>
                    </View>
                    <View style={styles.infoBox}>
                        <Text style={styles.playerText}>
                            {item.players.map(player => {
                                return player.name + ', ';
                            })}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    };

    const _signOutAsync = async () => {
        await AsyncStorage.clear();
        navigation.navigate('Auth');
    };
    return (
        <SafeAreaView style={styles.container}>
            <FlatList data={VIDEOS} renderItem={_renderVideo} keyExtractor={video => video.id}>

            </FlatList>
        </SafeAreaView>
    );
}

HomeScreen.navigationOptions = {
    title: 'Home',
};

export default HomeScreen;
import React from 'react'
import { StyleSheet, View, Text, TouchableHighlight, ImageBackground, StatusBar } from 'react-native'

export default function Filmes(props){

    StatusBar.setBarStyle('light-content')

    return(
        <View style={styles.card}>
            <TouchableHighlight onPress={() => {}} underlayColor='#0000aa'>
                <ImageBackground source={{uri: props.data.cover_movie}} style={styles.imgFilme} resizeMode='cover'>
                    <View style={{flex: 1, justifyContent: 'flex-end', alignItems: 'flex-start'}}>
                        <Text style={styles.nameFilme}>{props.data.name_movie}</Text>
                    </View>
                </ImageBackground>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    card:{
        margin: 5,
        shadowColor: '#fff',
        shadowOpacity: .8,
        shadowOffset: {width: 0, height: 1},
        borderRadius: 2,
        shadowRadius: 2,
        elevation: 3
    },
    imgFilme:{
        width: '100%',
        height: 200
    },
    nameFilme:{
        fontSize: 30,
        color: '#fff',
        fontWeight: 'bold'
    }
})

import React, {useState} from 'react'
import {View, Text, StyleSheet, Image, ImageBackground, ScrollView, TouchableOpacity,FlatList} from 'react-native'

export const Story = () => {
    const image = { uri : '../assets/classroom.jpg'}
    return (
        <View style={{backgroundColor:'white',flex:1}}>
            <ImageBackground
            source={image}
            style={styles.image}
            imageStyle={{borderBottomLeftRadius : 30,borderBottomRightRadius: 30}}
            >
            </ImageBackground>
            <Text style={styles.Tagline}>Character Name</Text>
            <Text style={styles.Textname}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : '#fff',
        alignItems : 'center',
        justifyContent : 'center'
    },
    image : { 
        height: 600,
        justifyContent : "flex-end"
    },
    Tagline : {
        color: 'white',
        fontSize : 24,
        fontWeight: bold,
        paddingHorizontal : 14,
        marginBottom : 20

    }
})

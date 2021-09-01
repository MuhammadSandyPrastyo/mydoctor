import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ILLogo } from '../../assets'

export default function Splash({ navigation }) {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace("GetStarted");
        }, 3000)

    }, [navigation])
    return (
        <View style={styles.pages}>
            <ILLogo />
            <Text style={styles.title}>My Doctor</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    pages: {
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontFamily: 'nunito-semibold',
        marginTop: 20,
        fontSize: 20,
    }
})

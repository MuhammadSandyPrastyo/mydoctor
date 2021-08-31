import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import { ILGetStarted, ILLogo } from '../../assets'
import { Buttons, Gaps } from '../../components'

export default function GetStarted() {
    return (
        <ImageBackground source={ILGetStarted} style={styles.container}>

            <View>
                <ILLogo />
                <Text style={styles.title}>Konsultasi dengan
                    dokter jadi lebih
                    mudah & fleksibel</Text>
            </View>
            <View>
                <Buttons title="Get Started" />
                <Gaps heights={16} />
                <Buttons type='secondary' title="Sign In" />
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 40,
        justifyContent: 'space-between'
    },
    title: {
        color: 'white',
        marginTop: 91,
        fontSize: 28,
        fontFamily: 'nunito-semibold',
        lineHeight: 33.6,
    }
})

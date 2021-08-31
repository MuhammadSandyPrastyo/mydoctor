import React from 'react'
import { ProgressViewIOSComponent, StyleSheet, Text, View } from 'react-native'

export default function Buttons({ type, title }) {
    return (
        <View style={styles.container(type)}>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: (type) => ({
        backgroundColor: type === 'secondary' ? 'white' : '#0BCAD4',
        borderRadius: 10,
    }),
    text: {
        padding: 10,
        fontFamily: 'nunito-semibold',
        textAlign: 'center',
        fontSize: 18,
    }
})

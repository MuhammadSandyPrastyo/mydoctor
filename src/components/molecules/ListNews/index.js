import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { DummyHospital1 } from '../../../assets'
import { fonts } from '../../../utils'

export default function ListNews() {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Is it safe to stay at home during coronavirus?</Text>
                <Text style={styles.time}>Today</Text>
            </View>
            <Image source={DummyHospital1} style={styles.image} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 16,
        justifyContent: 'space-between',
        marginVertical: 16,
        flexDirection: 'row',
    },
    image: {
        width: 80,
        height: 60,
    },
    title: {
        fontFamily: fonts.primary['600'],
        fontSize: 16,
        maxWidth: 215,
    },
    time: {
        fontFamily: fonts.primary['400'],
        fontSize: 12,
        maxWidth: 200,
        marginTop: 4,
    }
})

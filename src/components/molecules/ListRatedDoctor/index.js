import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { DummyDoctor1, ICStar } from '../../../assets'
import { fonts } from '../../../utils'

export default function ListRatedDoctor() {
    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <Image source={DummyDoctor1} style={styles.image} />
                <View >
                    <Text style={styles.name}>Alexa Rachel</Text>
                    <Text style={styles.job}>Pediatrician</Text>
                </View>
            </View>
            <View style={styles.star}>
                <ICStar />
                <ICStar />
                <ICStar />
                <ICStar />
                <ICStar />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 16,
    },
    wrapper: {
        flexDirection: 'row',

    },
    image: {
        height: 50,
        width: 50,
        marginRight: 12,
    },

    star: {
        flexDirection: 'row',
    },
    name: {
        fontFamily: fonts.primary['600'],
        fontSize: 16,
        maxWidth: 100,
    },
    job: {
        fontFamily: fonts.primary['400'],
        fontSize: 12,
    }
})

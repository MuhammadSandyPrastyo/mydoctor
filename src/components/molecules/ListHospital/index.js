import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Gaps } from '../..'
import { DummyHospital1 } from '../../../assets'
import { colors, fonts } from '../../../utils'

export default function ListHospital({ img, name, desc }) {
    return (
        <View style={styles.container}>
            <Image source={img} style={styles.image} />
            <Gaps widths={16} />
            <View>
                <Text style={styles.name}>{name}</Text>
                <Gaps heights={6} />
                <Text style={styles.desc}>{desc}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 76,
        margin: 16,

    },
    image: {
        width: 80,
        height: 60,
    },
    name: {
        fontSize: 16,
        fontFamily: fonts.primary['400'],
        color: colors.text.main,
        maxWidth: 180,
    },
    desc: {
        fontSize: 12,
        fontFamily: fonts.primary['300'],
        color: colors.text.secondary,
        maxWidth: 120,
    },
})

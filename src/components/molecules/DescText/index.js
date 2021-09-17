import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Line } from '../..'
import { colors, fonts } from '../../../utils'

export default function DescText({ label, desc }) {
    return (
        <View>
            <Text style={styles.label} >{label}</Text>
            <Text style={styles.desc}>{desc}</Text>
            <Line />
        </View>
    )
}

const styles = StyleSheet.create({
    label: {
        fontFamily: fonts.primary["400"],
        fontSize: 14,
        color: colors.text.secondary,
        marginBottom: 6,
    },
    desc: {
        fontFamily: fonts.primary["400"],
        fontSize: 14,
        color: colors.text.primary,
        marginBottom: 16,
    }
})

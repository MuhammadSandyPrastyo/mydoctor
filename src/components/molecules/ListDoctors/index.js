import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ICDoctorAnak, ICDoctorObat, ICDoctorPsikiater, ICDoctorUmum } from '../../../assets'
import { colors, fonts } from '../../../utils'

export default function ListDoctors({ category, onPress }) {

    const Icon = () => {
        if (category === "Dokter Umum") {
            return <ICDoctorUmum />
        }
        if (category === "Psikiater") {
            return <ICDoctorPsikiater />
        }
        if (category === "Dokter Obat") {
            return <ICDoctorObat />
        }
        if (category === "Dokter Anak") {
            return <ICDoctorAnak />
        }
        return <ICDoctorAnak />
    }
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Icon />
            <Text style={styles.text}>Saya butuh</Text>
            <Text style={styles.text1}>{category}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 10,
        borderRadius: 10,
        padding: 12,
        backgroundColor: colors.background.listCard,
    },
    text: {
        fontFamily: fonts.primary['300'],
        fontSize: 12,
        maxWidth: 85,
        marginTop: 28,
    },
    text1: {
        fontFamily: fonts.primary['600'],
        fontSize: 12,
        maxWidth: 85,
    }
})

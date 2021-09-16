import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ICSendOff, ICSendOn } from '../../../assets'
import { colors } from '../../../utils'

export default function IconButton({ status, onPress }) {
    if (status == 'aktif') {
        return (
            <TouchableOpacity style={styles.container1} onPress={onPress}>
                <ICSendOn style={styles.icon} />
            </TouchableOpacity>
        )
    }
    return (
        <TouchableOpacity style={styles.container2} onPress={onPress}>
            <ICSendOff />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container1: {
        height: 45,
        width: 45,
        backgroundColor: colors.buttonIcon.on,
        borderRadius: 10,
        alignItems: 'center',
        paddingLeft: 5,
        paddingTop: 1,
    },
    container2: {
        height: 45,
        width: 45,
        backgroundColor: colors.buttonIcon.off,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },

})

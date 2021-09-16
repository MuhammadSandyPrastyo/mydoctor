import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import { ICBackLight } from '../../../assets'
import { colors, fonts } from '../../../utils'

export default function HeaderProfile({ img, name, job, onPress }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <ICBackLight onPress={onPress} />

            </TouchableOpacity>
            <View style={styles.textWrapper}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.job}>{job}</Text>
            </View>
            <Image source={img} style={styles.image} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingVertical: 30,
        flexDirection: 'row',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        backgroundColor: colors.main,
        justifyContent: 'space-between',


    },
    textWrapper: {
        alignItems: 'center',
    },
    text: {
        flex: 1,
        textAlign: 'center',
        marginRight: 24,
        fontSize: 20,
        fontFamily: fonts.primary['600'],
        color: 'white',
    },
    image: {
        height: 46,
        width: 46,
    },
    name: {
        fontFamily: fonts.primary['600'],
        fontSize: 20,
        color: 'white',
    },
    job: {
        fontFamily: fonts.primary['400'],
        fontSize: 14,
        color: colors.text.secondary,
    }
})

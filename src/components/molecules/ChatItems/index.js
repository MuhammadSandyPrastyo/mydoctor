import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { DummyDoctor7 } from '../../../assets'
import { colors, fonts } from '../../../utils'

export default function ChatItems({ isMe, text, time }) {
    if (isMe) {
        return (
            <View style={styles.container1}>
                <View style={styles.wrapper1}>
                    <Text style={styles.text1}>{text}</Text>
                </View>
                <Text style={styles.time1}>{time}</Text>
            </View>
        )
    }

    return (
        <View style={styles.container2}>
            <Image source={DummyDoctor7} style={styles.image} />
            <View>
                <View style={styles.wrapper2}>
                    <Text style={styles.text2}>{text}</Text>
                </View>
                <Text style={styles.time2}>{time}</Text>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    wrapper1: {
        backgroundColor: colors.chat.background.me,
        width: "70%",
        justifyContent: 'flex-end',
        borderRadius: 20,
        borderBottomRightRadius: 0,
        padding: 12,
    },
    text1: {
        fontFamily: fonts.primary['400'],
        fontSize: 14,
        color: colors.chat.text.me,
    },
    time1: {
        marginTop: 8,
        marginBottom: 20,
        fontFamily: fonts.primary['400'],
        fontSize: 11,
        color: colors.text.secondary,
    },
    time2: {
        marginTop: 8,
        fontFamily: fonts.primary['400'],
        fontSize: 11,
        color: colors.text.secondary,
    },
    wrapper2: {
        backgroundColor: colors.chat.background.opponent,
        width: "80%",
        justifyContent: 'flex-start',
        borderRadius: 20,
        borderBottomLeftRadius: 0,
        padding: 12,
    },
    text2: {
        fontFamily: fonts.primary['400'],
        fontSize: 14,
        color: colors.chat.text.opponent,
    },
    container2: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginHorizontal: 16,
        marginBottom: 20,

    },
    image: {
        height: 30,
        width: 30,
        marginRight: 16,
        alignSelf: 'flex-end',
    },
    container1: {
        alignItems: 'flex-end',
        marginHorizontal: 16,

    },
})

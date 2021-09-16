import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { DummyUser1, ICDeletePhoto } from '../../assets'
import { Buttons, Gaps, Header, Input } from '../../components'
import { colors } from '../../utils'

export default function EditProfile({ navigation }) {
    return (
        <View style={styles.container}>
            <Header title='Daftar Akun' onPress={() => navigation.goBack()} />
            <View style={styles.wrapper}>
                <View style={styles.wrapperImage}>
                    <Image source={DummyUser1} style={styles.image} />
                    <ICDeletePhoto style={styles.icon} />
                </View>

                <Input label='Full Name' />
                <Gaps heights={24} />
                <Input label='Pekerjaan' />
                <Gaps heights={24} />
                <Input label='Email Address' disable placeHoldDis='musanpras@gmail.com' />
                <Gaps heights={24} />
                <Input label='Password' password />
                <Gaps heights={40} />
                <Buttons title='Save Profile' />
                <Gaps heights={48} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'space-between',
    },
    wrapper: {
        marginHorizontal: 40,
    },
    wrapperImage: {
        marginVertical: 26,
        height: 130,
        width: 130,
        borderRadius: 130 / 2,
        borderWidth: 1,
        borderColor: colors.line,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        height: 110,
        width: 110,
        borderRadius: 110 / 2,
        position: 'relative',
    },
    icon: {
        right: 0,
        bottom: 0,
        position: 'absolute',
    }
})

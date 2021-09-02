import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ICBackDark } from '../../assets'
import { Buttons, Gaps, Header, Input } from '../../components'


export default function Register() {
    return (
        <View style={styles.wrapper}>
            <Header title="Daftar Akun" />
            <View style={styles.container}>
                <Input label="Full Name" />
                <Gaps heights={24} />
                <Input label="Pekerjaan" />
                <Gaps heights={24} />
                <Input label="Email Address" />
                <Gaps heights={24} />
                <Input label="Password" />
                <Gaps heights={40} />
                <Buttons title="Continue" />
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#FFFFFF',
        flex: 1,
    },
    container: {
        padding: 40,
        paddingTop: 0,
        backgroundColor: '#FFFFFF',
    }
})

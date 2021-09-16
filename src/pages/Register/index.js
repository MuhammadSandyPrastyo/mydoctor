import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ICBackDark } from '../../assets'
import { Buttons, Gaps, Header, Input } from '../../components'


export default function Register({ navigation }) {
    return (
        <View style={styles.wrapper}>
            <Header title="Daftar Akun" onPress={() => navigation.goBack()} />
            <View style={styles.container}>
                <Input label="Full Name" />
                <Gaps heights={24} />
                <Input label="Pekerjaan" />
                <Gaps heights={24} />
                <Input label="Email Address" />
                <Gaps heights={24} />
                <Input label="Password" />
                <Gaps heights={40} />
                <Buttons title="Continue" onPress={() => navigation.navigate("UploadPhoto")} />
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

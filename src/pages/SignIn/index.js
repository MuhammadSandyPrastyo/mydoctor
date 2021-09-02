import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ILLogo } from '../../assets'
import { Input, Link, Buttons, Gaps } from '../../components'


export default function SignIn() {
    return (
        <View style={styles.container}>
            <ILLogo />
            <Text style={styles.title}>Masuk dan mulai
                berkonsultasi</Text>
            <Gaps heights={40} />
            <Input label="Email Address" />
            <Gaps heights={24} />
            <Input label="Password" />
            <Gaps heights={10} />
            <Link text="Forgot My Password" size={12} />
            <Gaps heights={40} />
            <Buttons title="Sign In" />
            <Gaps heights={30} />
            <Link text="Create New Account" align="center" size={18} />


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 40,
        backgroundColor: 'white',
        flex: 1,
    },
    title: {
        fontSize: 20,
        lineHeight: 24,
        marginTop: 40,
        maxWidth: 153,
    }
})

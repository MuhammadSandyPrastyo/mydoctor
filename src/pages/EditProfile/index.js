import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { DummyUser1, ICDeletePhoto } from '../../assets'
import { Header, Input } from '../../components'

export default function EditProfile() {
    return (
        <View style={styles.container}>
            <Header title='Daftar Akun' />
            <View style={styles.wrapper}>
                <Image source={DummyUser1} style={styles.image} />
                <ICDeletePhoto style={styles.icon} />
            </View>
            <Input label='Full Name' />
            <Input label='Pekerjaan' />
            <Input label='Email Address' />
            <Input label='Password' />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    }
})

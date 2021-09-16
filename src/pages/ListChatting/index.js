import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { DummyDoctor8 } from '../../assets'
import { Header, ListDoctors, ListMessagesDoctor } from '../../components'

export default function ListChatting({ navigation }) {
    return (
        <View style={styles.container}>
            <Header title='Pilih Dokter Anak' type='dark' onPress={() => navigation.goBack()} />
            <ListMessagesDoctor
                image={DummyDoctor8}
                name='Alexander Jannie'
                desc='Wanita'
                next
                onPress={() => navigation.navigate('DoctorMessage')}
            />
            <ListMessagesDoctor
                image={DummyDoctor8}
                name='Alexander Jannie'
                desc='Wanita'
                next
            />
            <ListMessagesDoctor
                image={DummyDoctor8}
                name='Alexander Jannie'
                desc='Wanita'
                next
            />
            <ListMessagesDoctor
                image={DummyDoctor8}
                name='Alexander Jannie'
                desc='Wanita'
                next
            />
            <ListMessagesDoctor
                image={DummyDoctor8}
                name='Alexander Jannie'
                desc='Wanita'
                next
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    }
})

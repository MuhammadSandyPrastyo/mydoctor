import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { DummyDoctor7 } from '../../assets'
import { Buttons, ChatItems, Header } from '../../components'
import { colors, fonts } from '../../utils'

export default function DoctorMessage() {
    return (
        <View style={styles.container}>
            <View>
                <Header type='profile' img={DummyDoctor7} name='Nairobi Putri Hayza' job='Dokter Anak' />
                <Text style={styles.time}>Senin, 21 Maret, 2020</Text>
                <ChatItems isMe text="Ibu dokter, apakah memakan jeruk tiap hari itu buruk?" time="4.20 AM" />
                <ChatItems text="Oh tentu saja tidak karena jeruk itu sangat sehat..." time="4.45 AM" />
                <ChatItems isMe text="Baik ibu, terima kasih atas waktu dan ilmunya ..." time="4.50 AM" />
            </View>
            <View style={styles.wrapper} >
                <TextInput style={styles.message} placeholder="Tulis pesan untuk Nairobi" />
                <Buttons status='aktif' send='yes' onPress={() => alert("hello")} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'space-between'
    },
    time: {
        marginVertical: 20,
        alignSelf: 'center',
        fontFamily: fonts.primary['400'],
        fontSize: 11,
        color: colors.text.secondary,
    },
    message: {
        maxHeight: 45,
        flex: 1,
        marginRight: 10,
        borderRadius: 10,
        padding: 14,
        backgroundColor: colors.chat.textInput.background,
    },
    wrapper: {
        flexDirection: 'row',
        margin: 16,
        position: 'absolute',
        bottom: 0,

    },

})

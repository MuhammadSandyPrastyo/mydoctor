import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { DummyUser1 } from '../../assets'
import { Header, ListMessagesDoctor } from '../../components'
import { colors, fonts } from '../../utils'

export default function UserProfile({ navigation }) {
    return (
        <View style={styles.container}>
            <Header title="Profile" onPress={() => navigation.goBack()} />
            <View style={styles.wrapper}>
                <Image source={DummyUser1} style={styles.image} />
                <Text style={styles.name}>Shayna Melinda</Text>
                <Text style={styles.job}>Product Designer</Text>
            </View>
            <ListMessagesDoctor icon='edit' name='Edit Profile' desc='Last Update Yesterday' next onPress={() => navigation.navigate('EditProfile')} />
            <ListMessagesDoctor icon='language' name='Language' desc='Available 12 languages' next />
            <ListMessagesDoctor icon='rate' name='Give Us Rate' desc='On Google Play Store' next />
            <ListMessagesDoctor icon='help' name='Help Center' desc='Read our guidelines' next />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    image: {

        borderWidth: 1,
        height: 110,
        width: 110,
        borderRadius: 110 / 2,
    },
    wrapper: {
        alignItems: 'center',
    },
    name: {
        marginTop: 16,
        fontFamily: fonts.primary['600'],
        fontSize: 20,
        color: colors.text.main,
    },
    job: {
        marginTop: 2,
        marginBottom: 30,
        fontFamily: fonts.primary['400'],
        fontSize: 16,
        color: colors.text.secondary,
    }

})

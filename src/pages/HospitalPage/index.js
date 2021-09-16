import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import { DummyHospital1, DummyHospital2, DummyHospital3, DummyHospitalCover } from '../../assets'
import { Line, ListHospital, Gaps } from '../../components'
import { colors, fonts } from '../../utils'

export default function HospitalPage() {
    return (
        <View style={styles.container}>
            <ImageBackground source={DummyHospitalCover} style={styles.cover}>
                <Gaps heights={30} />
                <Text style={styles.title} >Nearby Hospitals</Text>
                <Gaps heights={6} />
                <Text style={styles.desc}>3 tersedia</Text>
            </ImageBackground>
            <View style={styles.wrapper}>
                <ListHospital
                    img={DummyHospital1}
                    name='Rumah Sakit Citra Bunga Merdeka'
                    desc='Jln. Surya Sejahtera 20' />
                <Line />
                <ListHospital
                    img={DummyHospital2}
                    name='Rumah Sakit Anak Happy Family & Kids'
                    desc='Jln. Surya Sejahtera 20' />
                <Line />
                <ListHospital
                    img={DummyHospital3}
                    name='Rumah Sakit Jiwa Tingkatan Paling Atas'
                    desc='Jln. Surya Sejahtera 20' />
                <Line />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.main,
    },
    wrapper: {
        flex: 1,
        marginTop: -30,
        paddingTop: 30,
        borderRadius: 20,
        backgroundColor: 'white'
    },
    cover: {
        height: 240,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontFamily: fonts.primary['600'],
        color: colors.text.third,
    },
    desc: {
        fontSize: 14,
        fontFamily: fonts.primary['300'],
        color: colors.text.third,
    }
})
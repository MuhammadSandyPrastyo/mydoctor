import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { DummyDoctor8, ICFemale } from '../../assets'
import { Buttons, DescText, Gaps, Header } from '../../components'
import { colors, fonts } from '../../utils'

export default function DoctorProfile({ navigation }) {
    return (
        <View style={styles.container}>
            <Header title="Profile" onPress={() => navigation.goBack()} />
            <View style={styles.wrapper}>
                <View style={styles.imageWrapper} >
                    <View>
                        <Image source={DummyDoctor8} style={styles.image} />
                        <ICFemale style={styles.icon} />
                    </View>
                    <Text style={styles.name}>Nairobi Putri Hayza</Text>
                    <Text style={styles.job}>Dokter Anak</Text>
                </View>
                <DescText label="Alumnus" desc="Universitas Indonesia, 2020" />
                <Gaps heights={16} />
                <DescText label="Tempat Praktik" desc="Rumah Sakit Umum, Bandung" />
                <Gaps heights={16} />
                <DescText label="No. STR" desc="0000116622081996" />
                <Gaps heights={24} />
                <Buttons title="Start Consultation" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    wrapper: {
        marginHorizontal: 16,
        marginTop: 40,
    },
    name: {
        fontFamily: fonts.primary["600"],
        fontSize: 20,
        color: colors.text.main,
        marginTop: 16,
        marginBottom: 2,
    },
    job: {
        fontFamily: fonts.primary["600"],
        fontSize: 16,
        color: colors.text.secondary,
        marginBottom: 26,
    },
    imageWrapper: {
        alignItems: 'center',
    },
    icon: {
        position: 'absolute',
        bottom: 0,
        right: 0,
    }
})

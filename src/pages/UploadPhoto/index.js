import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { ICAddPhoto, ILNullPhoto } from '../../assets'
import { Gaps, Link } from '../../components/atoms'
import Buttons from '../../components/atoms/Buttons'
import Header from '../../components/molecules/Header'

export default function UploadPhoto({ navigation }) {
    return (
        <View style={styles.container}>
            <Header title="Upload Photo" onPress={() => navigation.goBack()} />
            <View style={styles.wrapper}>
                <View style={styles.imageWrapper}>
                    <Image source={ILNullPhoto} style={styles.image} />
                    <ICAddPhoto style={styles.icon} />
                </View>
                <Gaps heights={26} />
                <Text style={styles.name}>Shayna Melinda</Text>
                <Gaps heights={4} />
                <Text style={styles.job}>Product Designer</Text>
            </View>
            <View style={styles.bottomWrapper}>
                <Buttons title='Upload and Continue' />
                <Gaps heights={30} />
                <Link title='Skip for this' align='center' size={16} onPress={() => navigation.replace("MyApp")} />
                <Gaps heights={64} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: 'white',
    },
    imageWrapper: {
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        height: 130,
        width: 130,
        borderRadius: 130 / 2,
        borderColor: '#E9E9E9',

    },
    image: {
        height: 110,
        width: 110,
        borderRadius: 110 / 2,
        position: 'relative',
        backgroundColor: 'white',
    },
    icon: {
        position: 'absolute',
        bottom: 0,
        right: 0,

    },
    bottomWrapper: {
        marginHorizontal: 40,
    },
    name: {
        fontSize: 24,
        alignSelf: 'center',
    },
    job: {
        fontSize: 18,
        alignSelf: 'center',
        color: '#7D8797',
    },
})

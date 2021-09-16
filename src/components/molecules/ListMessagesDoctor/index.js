import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Line } from '../..'
import { DummyDoctor4, ICArrowRight, ICEdit, ICHelp, ICLanguage, ICRate } from '../../../assets'
import { fonts } from '../../../utils'

export default function ListMessagesDoctor({ icon, image, name, desc, next, onPress }) {

    const Icon = () => {
        if (icon === 'edit') {
            return <ICEdit />
        }
        if (icon === 'language') {
            return <ICLanguage />
        }
        if (icon === 'rate') {
            return <ICRate />
        }
        if (icon === 'help') {
            return <ICHelp />
        }
        return <ICEdit />
    }
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                {icon ? <Icon /> : <Image source={image} style={styles.image} />}
                <View style={styles.wrapper}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.desc}>{desc}</Text>
                </View>
                {next && <ICArrowRight />}
            </View>
            <Line />
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 16,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    wrapper: {
        flex: 1,
        marginLeft: 16,
    },
    image: {
        height: 46,
        width: 46,
        marginRight: 12,
    },
    name: {
        fontFamily: fonts.primary['400'],
        fontSize: 16,
    },
    desc: {
        fontFamily: fonts.primary['300'],
        fontSize: 12,
    }
})

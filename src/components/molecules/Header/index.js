import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ICBackDark, ICBackLight } from '../../../assets';
import { colors, fonts } from '../../../utils';
import HeaderProfile from './HeaderProfile';

export default function Header({ title, navigation, onPress, type, img, name, job }) {

    if (type == 'profile') {
        return <HeaderProfile img={img} name={name} job={job} onPress={onPress} />
    }

    return (
        <View style={styles.container(type)}>
            <TouchableOpacity>
                {type == 'dark' ? <ICBackLight onPress={onPress} /> : <ICBackDark onPress={onPress} />}

            </TouchableOpacity>
            <Text style={styles.text(type)}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: (type) => ({
        paddingHorizontal: 16,
        paddingVertical: 30,
        flexDirection: 'row',
        borderBottomLeftRadius: type == 'dark' ? 20 : 0,
        borderBottomRightRadius: type == 'dark' ? 20 : 0,
        backgroundColor: type == 'dark' ? colors.main : 'white',


    }),
    text: (type) => ({
        flex: 1,
        textAlign: 'center',
        marginRight: 24,
        fontSize: 20,
        fontFamily: fonts.primary['600'],
        color: type == 'dark' ? 'white' : colors.main,
    })
})

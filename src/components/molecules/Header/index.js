import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ICBackDark } from '../../../assets';

export default function Header({ title, navigation }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <ICBackDark onPress={() => navigation.goBack()} />
            </TouchableOpacity>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 16,
        marginTop: 30,
        marginBottom: 40,
        flexDirection: 'row',

    },
    text: {
        flex: 1,
        textAlign: 'center',
        marginRight: 24,
        fontSize: 20,
        fontFamily: 'Nunito-Semi-bold',
    }
})

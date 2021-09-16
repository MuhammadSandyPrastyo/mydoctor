import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import Gaps from '../Gaps'

export default function Input({ label, disable, password }) {

    if (disable) {
        return (
            <View>
                <Text style={styles.labels}>{label}</Text>
                <Gaps heights={6} />
                <TextInput style={styles.inputDis} editable={false}></TextInput>
            </View>
        )
    }
    if (password) {
        return (
            <View>
                <Text style={styles.labels}>{label}</Text>
                <Gaps heights={6} />
                <TextInput style={styles.input} secureTextEntry={true} ></TextInput>
            </View>
        )
    }

    return (
        <View>
            <Text style={styles.labels}>{label}</Text>
            <Gaps heights={6} />
            <TextInput style={styles.input}></TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    labels: {
        fontSize: 16,
        color: '#7D8797'
    },
    input: {
        paddingHorizontal: 12,
        paddingTop: 11,
        paddingBottom: 12,
        height: 45,
        borderWidth: 1,
        borderColor: '#E9E9E9',
        fontSize: 16,
        borderRadius: 10,
    },
    inputDis: {
        paddingHorizontal: 12,
        paddingTop: 11,
        paddingBottom: 12,
        height: 45,
        borderWidth: 1,
        borderColor: '#E9E9E9',
        fontSize: 16,
        borderRadius: 10,
        backgroundColor: '#E9E9E9'
    }
})

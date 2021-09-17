import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { colors } from '../../../utils'
import Gaps from '../Gaps'

export default function Input({ label, disable, password, placeHoldDis, value, onChangeText }) {
    const [border, setBorder] = useState(colors.border.onBlur)
    const onFocusForm = () => {
        return (
            setBorder(colors.border.onFocus)
        )
    }
    const onBlurForm = () => {
        return (
            setBorder(colors.border.onBlur)
        )
    }

    if (disable) {
        return (
            <View>
                <Text style={styles.labels}>{label}</Text>
                <Gaps heights={6} />
                <TextInput style={styles.inputDis} editable={false} placeholder={placeHoldDis}></TextInput>
            </View>
        )
    }
    if (password) {
        return (
            <View>
                <Text style={styles.labels}>{label}</Text>
                <Gaps heights={6} />
                <TextInput onFocus={onFocusForm} onBlur={onBlurForm} style={styles.input(border)} secureTextEntry={true} value={value} onChangeText={onChangeText} ></TextInput>
            </View>
        )
    }

    return (
        <View>
            <Text style={styles.labels}>{label}</Text>
            <Gaps heights={6} />
            <TextInput onFocus={onFocusForm} onBlur={onBlurForm} style={styles.input(border)} value={value} onChangeText={onChangeText} ></TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    labels: {
        fontSize: 16,
        color: '#7D8797'
    },
    input: (border) => ({
        paddingHorizontal: 12,
        paddingTop: 11,
        paddingBottom: 12,
        height: 45,
        borderWidth: 1,
        borderColor: border,
        fontSize: 16,
        borderRadius: 10,
    }),
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

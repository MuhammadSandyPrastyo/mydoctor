import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function Link({ title, align, size, onPress }) {
    return (
        <TouchableOpacity style={styles.wrapper(align)} onPress={onPress}>
            <Text style={styles.link(size)}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    wrapper: (align) => ({
        alignItems: align === 'center' ? 'center' : 'flex-start',
    }),
    link: (size) => ({
        textDecorationLine: 'underline',
        fontSize: size,
    }),
})

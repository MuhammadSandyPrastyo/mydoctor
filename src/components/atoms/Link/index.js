import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function Link({ text, align, size }) {
    return (
        <TouchableOpacity style={styles.wrapper(align)}>
            <Text style={styles.link(size)}>{text}</Text>
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

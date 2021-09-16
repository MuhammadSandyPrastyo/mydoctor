import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Gaps } from '..'
import { ICDoctorActive, ICDoctorInActive, ICMapActive, ICMapInActive, ICMessageActive, ICMessageInActive } from '../../../assets'
import { colors } from '../../../utils'

export default function TabButtons({ title, active, onPress, onLongPress }) {

    const Icon = () => {
        if (title === 'Doctors') {
            return active ? <ICDoctorActive /> : <ICDoctorInActive />
        }
        if (title === 'Messages') {
            return active ? <ICMessageActive /> : <ICMessageInActive />
        }
        if (title === 'Hospitals') {
            return active ? <ICMapActive /> : <ICMapInActive />
        }
        return <ICDoctorInActive />
    }

    return (
        <TouchableOpacity onPress={onPress} onLongPress={onLongPress} style={styles.container}>
            <Icon />
            <Gaps heights={4} />
            <Text style={styles.text(active)}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    text: (active) => ({
        color: active ? colors.text.tabActive : colors.text.tabInActive,
    })

})

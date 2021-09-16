import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { DummyDoctor4, DummyDoctor5, DummyDoctor6 } from '../../assets'
import { Header, Line, ListMessagesDoctor } from '../../components'
import { colors, fonts } from '../../utils'

export default function MessagesPage() {
    const [doctors] = useState([
        {
            id: 1,
            profile: DummyDoctor4,
            name: 'Alexander Jannie',
            desc: 'Baik ibu, terima kasih banyak atas wakt...',
        },
        {
            id: 2,
            profile: DummyDoctor5,
            name: 'Nairobi Putri Hayza',
            desc: 'Oh tentu saja tidak karena jeruk it...',
        },
        {
            id: 3,
            profile: DummyDoctor6,
            name: 'John McParker Steve',
            desc: 'Oke menurut pak dokter bagaimana unt...',
        },

    ])
    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <Text style={styles.title} >Messages</Text>
                {
                    doctors.map(doctor => {
                        return <ListMessagesDoctor
                            key={doctor.id}
                            profile={doctor.profile}
                            name={doctor.name}
                            desc={doctor.desc}
                        />
                    })
                }

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.main,
    },
    wrapper: {
        flex: 1,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        backgroundColor: 'white'
    },
    title: {
        fontFamily: fonts.primary['600'],
        fontSize: 20,
        marginTop: 30,
        marginHorizontal: 16,
    }
})

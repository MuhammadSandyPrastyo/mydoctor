import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { DummyUser1, JSONCategoryDoctor } from '../../assets'
import { Gaps, Line, ListDoctors, ListNews, ListRatedDoctor } from '../../components'
import { colors, fonts } from '../../utils'

export default function DoctorPage({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <TouchableOpacity style={styles.section1} onPress={() => navigation.navigate("UserProfile")} >
                        <Image source={DummyUser1} style={styles.image} />
                        <View>
                            <Text style={styles.name}>Shayna Melinda</Text>
                            <Text style={styles.job}>Product Designer</Text>
                        </View>
                    </TouchableOpacity>
                    <Gaps heights={30} />
                    <Text style={styles.title} >Mau konsultasi dengan siapa hari ini?</Text>
                    <Gaps heights={16} />
                    <View style={styles.section2}>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                            <Gaps widths={6} />
                            {JSONCategoryDoctor.data.map(items => {
                                return <ListDoctors
                                    key={items.id}
                                    category={items.category}
                                    onPress={() => navigation.navigate('ListChatting')}
                                />
                            })}
                            <Gaps widths={6} />
                        </ScrollView>
                    </View>
                    <Gaps heights={30} />
                    <Text style={styles.title2} >Top Rated Doctors</Text>
                    <Gaps heights={16} />
                    <ListRatedDoctor />
                    <ListRatedDoctor />
                    <ListRatedDoctor />
                    <Gaps heights={30} />
                    <Text style={styles.title2} >Good News</Text>
                    <Gaps heights={16} />
                    <ListNews />
                    <Line />
                    <ListNews />
                    <Line />
                    <ListNews />
                    <Line />
                </ScrollView>
            </View>
        </View >
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
    image: {
        height: 46,
        width: 46,
        borderRadius: 23,
        marginRight: 16,
    },
    name: {
        color: colors.text.main,
        fontSize: 16,
        fontFamily: fonts.primary['600'],
    },
    job: {
        color: colors.text.secondary,
        fontSize: 12,
        fontFamily: fonts.primary['400'],
    },
    section1: {
        flexDirection: 'row',
        marginHorizontal: 16,
        marginTop: 30,
    },
    title: {
        fontFamily: fonts.primary['600'],
        fontSize: 20,
        color: colors.text.primary,
        marginHorizontal: 16,
        maxWidth: 210,
    },
    title2: {
        fontFamily: fonts.primary['600'],
        fontSize: 16,
        color: colors.text.primary,
        marginHorizontal: 16,
    },
    section2: {
        flexDirection: 'row',
    },
})

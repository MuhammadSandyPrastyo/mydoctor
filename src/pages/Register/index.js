import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { ICBackDark } from '../../assets'
import { Buttons, Gaps, Header, Input } from '../../components'
import { Fire } from '../../config'
import useForm from '../../utils/useForm'


export default function Register({ navigation }) {

    // const [fullname, setFullname] = useState('')
    // const [job, setJob] = useState('')
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')

    const [form, setForm] = useForm({
        fullname: '',
        job: '',
        email: '',
        password: '',
    })

    const onContinue = () => {
        Fire.auth()
            .createUserWithEmailAndPassword(form.email, form.password)
            .then((success) => {
                console.log('register success: ', success)
            })
            .catch((error) => {
                var errorMessage = error.message;
                console.log('error message: ', errorMessage)
            });

        console.log(form);
    }

    return (
        <View style={styles.wrapper}>
            <Header title="Daftar Akun" onPress={() => navigation.goBack()} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <Input label="Full Name" value={form.fullname} onChangeText={(value) => setForm('fullname', value)} />
                    <Gaps heights={24} />
                    <Input label="Pekerjaan" value={form.job} onChangeText={(value) => setForm('job', value)} />
                    <Gaps heights={24} />
                    <Input label="Email Address" value={form.email} onChangeText={(value) => setForm('email', value)} />
                    <Gaps heights={24} />
                    <Input label="Password" password value={form.password} onChangeText={(value) => setForm('password', value)} />
                    <Gaps heights={40} />
                    <Buttons title="Continue" onPress={onContinue} />
                </View>
            </ScrollView>
        </View>

    )
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#FFFFFF',
        flex: 1,
    },
    container: {
        padding: 40,
        paddingTop: 0,
        backgroundColor: '#FFFFFF',
    }
})

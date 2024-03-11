import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

import colors from '../utils/global/colors'
import fonts from '../utils/global/fonts'

import InputForm from '../components/InputForm'
import SubmitButton from '../components/SubmitButton'
import { useRegisterMutation } from '../app/services/auth'

// Redux
import { setUser } from '../features/auth/authSlice'
import { useDispatch } from 'react-redux'

const Register = ({ navigation }) => {

    const dispatch = useDispatch()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const [triggerRegister] = useRegisterMutation()

    const onSubmit = async () => {
        try {
            const { data } = await triggerRegister({ email, password })
            dispatch(setUser({
                email: data.email,
                idToken: data.idToken
            }))
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <View style={styles.main}>
            <View style={styles.container}>

                <InputForm
                    label="Email"
                    value={email}
                    onChangeText={(t) => setEmail(t)}
                    isSecure={false}
                    error=""
                />

                <InputForm
                    label="Password"
                    value={password}
                    onChangeText={(t) => setPassword(t)}
                    isSecure={true}
                    error=""
                />

                <InputForm
                    label="Confirmar Password"
                    value={confirmPassword}
                    onChangeText={(t) => setConfirmPassword(t)}
                    isSecure={true}
                    error=""
                />

                <SubmitButton onPress={onSubmit} title="Registrarme" />
                <Text style={styles.sub}>Ya tienes cuenta?</Text>

                <Pressable onPress={() => navigation.navigate("SignIn")}>
                    <Text style={styles.subLink}>Inicia sesión</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default Register

const styles = StyleSheet.create({

    main: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        marginTop: 20
    },

    container: {
        width: "90%",
        backgroundColor: colors.green1,
        gap: 15,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 20
    },

    title: {
        fontSize: 22,
        fontFamily: fonts.JosefinSlabBold
    },

    sub: {
        fontSize: 14,
        fontFamily: fonts.JosefinSlabBold
    },

    subLink: {
        fontSize: 14,
        fontFamily: fonts.JosefinSlabBold,
        color: "blue"
    },
})
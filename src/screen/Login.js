import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

import colors from '../utils/global/colors'
import fonts from '../utils/global/fonts'

import InputForm from '../components/InputForm'
import SubmitButton from '../components/SubmitButton'


const Login = ({navigation}) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const onSubmit = () => {
        console.log("Formulario enviado")
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

                <SubmitButton onPress={onSubmit} title="Iniciar Sesión" />
                <Text style={styles.sub}>No tienes cuenta?</Text> 

                <Pressable onPress={() => navigation.navigate("Register")}>
                    <Text style={styles.subLink}>Registrate</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default Login

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
import { StyleSheet, Text, View } from 'react-native'
import { Entypo } from "@expo/vector-icons"
import colors from '../utils/global/colors'

const TabBarIcon = ({ title, icono, focused }) => {
    return (
        <View style={styles.container}>
            <Entypo
                name={icono}
                size={25}
                color={focused ? "white": colors.green2}
            />
            <Text
                style={[styles.text, focused && styles.textFocused]}
            >
                {title}
            </Text>
        </View>
    )
}

export default TabBarIcon

const styles = StyleSheet.create({
    container: {
        alignItems: "center"
    },

    text: {
        color: colors.green2,
        textAlign: "center",
        fontSize: 15
    },
    
    textFocused: {
        color: "white",
    }
})
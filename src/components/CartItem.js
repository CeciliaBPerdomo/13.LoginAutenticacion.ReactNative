import { Pressable, StyleSheet, Text, View } from 'react-native'
import { Entypo } from "@expo/vector-icons"
import colors from '../utils/global/colors'
import fonts from '../utils/global/fonts'

// Redux
import { useDispatch } from 'react-redux'
import { deleteCartItem } from '../features/cart/cartSlice'

const CartItem = ({ item }) => {
    const dispatch = useDispatch()

    return (
        <View style={styles.card}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>{item.title}</Text>
                <Text style={styles.text2}>{item.brand}</Text>
                <Text style={styles.text2}>Cantidad: {item.quantity}</Text>
                <Text style={styles.text2}>Precio: $ {item.price}</Text>
            </View>

            <Pressable onPress={() => dispatch(deleteCartItem(item.id))}>
                <Entypo name="trash" size={30} color="black" />
            </Pressable>
        </View>
    )
}

export default CartItem

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.green1,
        padding: 20,
        margin: 10,
        borderWidth: 2,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        height: 100,
        alignItems: "center"
    },

    textContainer: {
        width: "70%"
    },

    text: {
        color: colors.lightGray,
        fontSize: 19,
        fontFamily: fonts.JosefinSlabBold
    },

    text2: {
        fontSize: 14,
        color: colors.lightGray,
        fontFamily: fonts.JosefinSlabBold
    }
})
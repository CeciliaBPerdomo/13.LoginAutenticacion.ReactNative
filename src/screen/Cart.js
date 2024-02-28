import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
//import cart from "../utils/data/cart.json"
import fonts from '../utils/global/fonts'
import CartItem from '../components/CartItem'
import { useSelector } from 'react-redux'

const Cart = () => {

  const cart = useSelector((state) => state.cart)
  return (
    <View style={styles.container}>
      <FlatList
        data={cart.items}
        keyExtractor={(item => item.id)}
        renderItem={({ item }) => <CartItem item={item} />}
      />

      <View style={styles.confirmContainer}>
        <Pressable>
          <Text style={styles.confirmText}>Confirmar</Text>
        </Pressable>
        <Text style={styles.confirmText}>Total: $ {cart.total}</Text>

      </View>

    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    marginBottom: 130 //Para que la barra no tape el contenido
  },

  confirmContainer: {
    flexDirection: "row",
    backgroundColor: "gray",
    padding: 25,
    justifyContent: "space-between"
  },

  confirmText: {
    fontFamily: fonts.JosefinSlabBold,
    fontSize: 18,
    color: "white"
  },
})
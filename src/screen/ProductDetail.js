import { StyleSheet, Text, View, Image, Pressable, useWindowDimensions } from 'react-native'
import { useEffect, useState } from 'react'

//import products from "../utils/data/productos.json"
import { useGetProductByIdQuery } from '../app/services/shop'
import colors from '../utils/global/colors'

import { useDispatch } from 'react-redux'
import { addCartItem } from '../features/cart/cartSlice'

const ProductDetail = ({ route }) => {
  const dispatch = useDispatch()
  const {productId} = route.params
  //const [product, setProduct] = useState({})
  const {data: product, isLoading} = useGetProductByIdQuery(productId)

  const [portait, setPortait] = useState(true)
  const { width, height } = useWindowDimensions()


  useEffect(() => {
    // const productFinded = products.find(item => item.id === productId)
    // setProduct(productFinded)
  

    if (width > height) { //esta acostado
      setPortait(false) 
    } else {
      setPortait(true)
    }

  }, [productId, height, width])

  if(isLoading) return <View><Text>Cargando...</Text></View>

  return (
    <View style={styles.container}>
      <View style={[styles.content, !portait && {flexDirection: "row", gap: 10, padding: 20}]}>
        <Image
          style={[styles.image, !portait && {width: "40%", height: 200}]}
          source={product?.images ? { uri: product?.thumbnail } : null}
          resizeMode="cover"
        />
      </View>

      <View style={[styles.containerText, !portait && {width: "30%"}]}>
        <Text style={styles.title}>{product.title}</Text>
        <Text>{product.description}</Text>
      </View>

      <View style={[styles.containerPrice, 
        !portait && {width: "20%", flexDirection: "column"}]}>
        <Text style={styles.price}>
          $ {product.price}
        </Text>

        <Pressable style={styles.buyNow}>
          <Text style={styles.buyNowText} onPress={()=> dispatch(addCartItem(product))}>
            Agregar al carrito
          </Text>
        </Pressable>
      </View>

    </View>
  )
}

export default ProductDetail

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    justifyContent: "start",
    alignItems: "center"
  },

  content: {
    width: "100%",
    position: "relative"
  },

  image: {
    width: "100%",
    height: 300
  },

  containerText: {
    gap: 25,
    paddingHorizontal: 5,
    paddingVertical: 25
  },

  title: {
    fontSize: 20,
    fontWeight: "bold"
  },

  containerPrice: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 10
  },

  price: {
    fontSize: 30,
    color: "red"
  },

  buyNow: {
    backgroundColor: colors.green1,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 5,
  },

  buyNowText: {
    color: "white"
  }
})
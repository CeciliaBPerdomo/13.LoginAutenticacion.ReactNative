import { FlatList, StyleSheet } from 'react-native'
//import products from "../utils/data/productos.json"
import { useEffect, useState } from 'react'

import { useGetProductsByCategoriesQuery } from '../app/services/shop'

import ProductByCategory from '../components/ProductByCategory'
import Search from '../components/wrappers/Search'

const ProductsByCategory = ({ route, navigation }) => {
  const { categorySelected } = route.params
  const { data: productos, isError, isLoading, error, isSuccess } = useGetProductsByCategoriesQuery(categorySelected)

  const [productsFiltered, setProductsFiltered] = useState([])
  const [keyWord, setKeyWord] = useState("")

  useEffect(() => {
  setProductsFiltered(productos)

    if (keyWord) setProductsFiltered(productos.filter(product => {
        const productTitleLower = product.title.toLowerCase()
        const keyWordLower = keyWord.toLowerCase()
        return productTitleLower.includes(keyWordLower)
      }
      ))
  }, [categorySelected, keyWord, productos])

  const handlerKeyWord = (k) => {
    setKeyWord(k)
  }

  return (
    <>
      <Search handlerKeyWord={handlerKeyWord} />

      <FlatList
        style={styles.container}
        data={productsFiltered}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <ProductByCategory
          item={item}
          navigation={navigation}
        />}
      />
    </>
  )
}

export default ProductsByCategory

const styles = StyleSheet.create({
  container: {},
})
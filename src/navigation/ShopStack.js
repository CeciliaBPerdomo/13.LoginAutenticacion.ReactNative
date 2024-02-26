import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Headers from '../components/Headers'

import Home from '../screen/Home'
import ProductsByCategory from '../screen/ProductsByCategory'
import ProductDetail from '../screen/ProductDetail'

const Stack = createNativeStackNavigator();


const ShopStack = () => {
    return (
        <Stack.Navigator
            initialRouteName='Home'
            screenOptions={({ route, navigation }) => {
                return {
                    header: () => {
                        return <Headers
                            navigation={navigation}
                            title={route.name === "Home" ? "Mi e-commerce" :
                                route.name === "ProductsByCategory" ? route.params.categorySelected :
                                    "Detalle producto"
                            } />
                    }
                }
            }}
        >

            <Stack.Screen
                name="Home"
                component={Home}
            />

            <Stack.Screen
                name="ProductsByCategory"
                component={ProductsByCategory}
            />

            <Stack.Screen
                name="ProductDetail"
                component={ProductDetail}
            />

        </Stack.Navigator>
    )
}

export default ShopStack

const styles = StyleSheet.create({})
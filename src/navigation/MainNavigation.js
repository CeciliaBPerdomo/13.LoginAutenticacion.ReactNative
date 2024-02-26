import { StyleSheet, StatusBar } from 'react-native'

//Navegacion
import { NavigationContainer } from '@react-navigation/native'
import ShopStack from './ShopStack'

// Bottoms Tabs
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const MainNavigation = () => {
    return (
        <>
            <NavigationContainer>
                <ShopStack />
            </NavigationContainer>
        </>
    )
}

export default MainNavigation

const styles = StyleSheet.create({})
import { StyleSheet, StatusBar } from 'react-native'

//Navegacion
import { NavigationContainer } from '@react-navigation/native'
import ShopStack from './ShopStack'

// Bottoms Tabs
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CartStack from './CartStack';

import colors from '../utils/global/colors';
import OrderStack from './OrderStack';

const Tab = createBottomTabNavigator();

const MainNavigation = () => {
    return (
        <>
            <NavigationContainer>
                <Tab.Navigator
                    initialRouteName='ShopStack'
                    screenOptions={{
                        headerShown: false,         // No muestra el encabezado del tab
                        tabBarShowLabel: false,     // No muestra el texto del tab
                        tabBarStyle: styles.tabBar
                    }}
                >
                    <Tab.Screen
                        name="ShopStack"
                        component={ShopStack}
                    />

                    <Tab.Screen
                        name="CartStack"
                        component={CartStack}
                    />

                    <Tab.Screen
                        name="OrderStack"
                        component={OrderStack}
                    />

                </Tab.Navigator>
            </NavigationContainer>
        </>
    )
}

export default MainNavigation

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: colors.green1,
        height: 80,
        shadowColor: "black"
    }
})
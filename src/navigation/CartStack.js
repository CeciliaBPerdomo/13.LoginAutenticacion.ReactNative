import { StyleSheet } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cart from '../screen/Cart';
import Headers from '../components/Headers';

const Stack = createNativeStackNavigator();

const CartStack = () => {
    return (
        <Stack.Navigator
            initialRouteName='Cart'
            screenOptions={({ navigation }) => {
                return {
                    header: () => {
                        return <Headers
                            title="Carrito"
                            navigation={navigation}
                        />
                    }
                }
            }}
        >
            <Stack.Screen
                name="Cart"
                component={Cart}
            />
        </Stack.Navigator>
    )
}

export default CartStack

const styles = StyleSheet.create({})
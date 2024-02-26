import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Headers from '../components/Headers';
import Orders from '../screen/Orders';

const Stack = createNativeStackNavigator();


const OrderStack = () => {
    return (
        <Stack.Navigator
            initialRouteName='Orders'
            screenOptions={({ navigation }) => {
                return {
                    header: () => {
                        return <Headers
                            title="Ordenes"
                            navigation={navigation}
                        />
                    }
                }
            }}
        >
            <Stack.Screen
                name="Orders"
                component={Orders}
            />
        </Stack.Navigator>
    )
}

export default OrderStack

const styles = StyleSheet.create({})
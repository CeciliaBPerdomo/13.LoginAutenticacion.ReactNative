import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from "../screen/Login"
import Register from '../screen/Register';
import Headers from '../components/Headers';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator
            initialRouteName='SignIn'
            screenOptions={({ navigation, route }) => {
                return {
                    header: () => {
                        return <Headers
                            title={route.name === "SignIn" ? "Iniciar sesión" : "Registro"}
                            navigation={navigation}
                        />
                    }
                }
            }}
        >
            
            <Stack.Screen
                name="SignIn"
                component={Login}
            />

            <Stack.Screen
                name='Register'
                component={Register}
            />
        </Stack.Navigator>
    )
}

export default AuthStack
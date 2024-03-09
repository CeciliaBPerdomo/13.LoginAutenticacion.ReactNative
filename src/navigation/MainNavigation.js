//Navegacion
import { NavigationContainer } from '@react-navigation/native'
import TabNavigation from './TabNavigation';

import { useState } from 'react';
import AuthStack from './AuthStack';

const MainNavigation = () => {

    const [idToken, setIDToken] = useState("")

    return (
            <NavigationContainer>

                { idToken ?
                    <TabNavigation /> :
                    <AuthStack /> 
                }

            </NavigationContainer>
    )
}

export default MainNavigation

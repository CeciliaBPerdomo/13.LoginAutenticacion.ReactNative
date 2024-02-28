import { StyleSheet, StatusBar } from 'react-native'

import { useFonts } from "expo-font"
import { fontCollection } from './src/utils/global/fonts'
import colors from './src/utils/global/colors'

// Redux
import { store } from "./src/app/store"
import { Provider } from 'react-redux'

// Componente de navegacion
import MainNavigation from './src/navigation/MainNavigation'


const App = () => {
  const [fontsLoaded] = useFonts(fontCollection)
  if (!fontsLoaded) return null //Si no esta cargada que no devuelva nada

  return (
    <>
      <StatusBar
        backgroundColor={colors.green1}
        barStyle={"dark-content"}
      />

      {/* La barra de navagecion no tiene sentido porque no maneja información */}
      <Provider store={store}>
        <MainNavigation />
      </Provider>
    </>
  )
}

export default App

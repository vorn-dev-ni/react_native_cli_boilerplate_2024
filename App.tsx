import { NavigationContainer } from '@react-navigation/native'
import RootNavigation from './src/navigations/root'
import { PaperProvider } from 'react-native-paper'
import { useColorScheme } from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import { Provider } from 'react-redux'
import store from './src/redux/store'
import { useEffect } from 'react'
import { DarkTheme } from './src/utils/theme/darkschema';
import { LightTheme } from './src/utils/theme/lightschema';
export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, [])
  const scheme = useColorScheme();

  return (
    <Provider store={store}>
      <PaperProvider theme={
        scheme === 'dark' ?
          DarkTheme : LightTheme

      }>
        <NavigationContainer >
          <RootNavigation />
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  )
}
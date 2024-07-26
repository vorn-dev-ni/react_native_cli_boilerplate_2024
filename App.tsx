import { NavigationContainer } from '@react-navigation/native'
import RootNavigation from './src/navigations/root'
import { PaperProvider } from 'react-native-paper'
import theme from './src/utils/theme'
import { Provider } from 'react-redux'
import store from './src/redux/store'
export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <RootNavigation />
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  )
}
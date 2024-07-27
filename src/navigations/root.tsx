import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ROUTE_APP } from '../routes';
import { StatusBar, SafeAreaView } from 'react-native';
import Home from '../screens/Main/Home';
import { useAppTheme } from '../hooks/theme';
const Stack = createNativeStackNavigator();
function RootNavigation() {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "red" }}>
            <StatusBar translucent barStyle={'default'} />
            <Stack.Navigator>
                <Stack.Screen name={ROUTE_APP.main.home} component={Home} options={{
                    title: 'Home',


                }} />

            </Stack.Navigator>
        </SafeAreaView>
    );
}
export default RootNavigation
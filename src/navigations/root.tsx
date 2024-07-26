import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ROUTE_APP } from '../routes';
import Main from './HomeStack/Main';
import Authentication from './AuthStack/Authentication';
import { StatusBar, SafeAreaView } from 'react-native';
const Stack = createNativeStackNavigator();
function RootNavigation() {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "red" }}>
            <StatusBar translucent barStyle={'default'} />
            <Stack.Navigator>
                <Stack.Screen name={ROUTE_APP.main.home} component={Main} options={{
                    title: 'Home'
                }} />

            </Stack.Navigator>
        </SafeAreaView>
    );
}
export default RootNavigation
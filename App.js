import 'react-native-gesture-handler'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import Home from './screens/Home';
import Details from './screens/Details';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Detaisls" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

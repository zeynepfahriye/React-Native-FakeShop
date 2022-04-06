
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Product from './src/pages/Product/Product'
import Detail from './src/pages/Detail';
import Login from './src/pages/Login';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LoginPages" component={Login} options={{ headerShown: false, }} />
        <Stack.Screen name="ProductsPage" component={Product} options={{ title: 'Fake Shop', headerTitleAlign: 'center', headerStyle: { backgroundColor: '#557B83' }, headerTitleStyle: { color: 'white', } }} />
        <Stack.Screen name="DetailPage" component={Detail} options={{ title: 'Detay', headerTitleAlign: 'center', headerStyle: { backgroundColor: '#557B83' }, headerTitleStyle: { color: 'white', }, headerTintColor: 'white' }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;
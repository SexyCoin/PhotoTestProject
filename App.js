
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Lenta from './screens/lenta'
import CardPhoto from './screens/cardPhoto'
import Login from './screens/login'
const Stack = createNativeStackNavigator();

function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Lenta" component={Lenta} />
          <Stack.Screen name="CardPhoto" component={CardPhoto} />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  
}

export default App;
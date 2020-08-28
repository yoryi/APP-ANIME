import React from 'react';

//MODULOS
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//APP
import InicioScreen from '../screen/InicioScreen'
import DetallesScreen from '../screen/DetallesScreen'

//NAVEGACION
const Stack = createStackNavigator();

//APP
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Inicio" component={InicioScreen}  options={{headerShown:false}} />
        <Stack.Screen name="Detalles" component={DetallesScreen}  options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
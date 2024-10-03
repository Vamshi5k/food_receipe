import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FoodScreen from './Screens/FoodScreen';
import Welcome from './Screens/Welcome';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Food" component={FoodScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

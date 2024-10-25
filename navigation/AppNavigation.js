
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen/Home';
import Started1 from "../screens/Started1/Started1";
const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{title : false}}  >
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Started1" component={Started1} options={{headerLeft : ()=>{null}}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

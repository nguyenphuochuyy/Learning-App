
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen/Home';
import Started1 from "../screens/Started1/Started1";
import Started2 from "../screens/Started2/Started2";
import Started3 from "../screens/Started3/Started3";
import Started4 from "../screens/Started4/Started4";
const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{title : false}}  >
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Started1" component={Started1} options={{headerLeft : ()=>{null}}}/>
        <Stack.Screen name="Started2" component={Started2}/>
        <Stack.Screen name="Started3" component={Started3}/>
        <Stack.Screen name="Started4" component={Started4}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

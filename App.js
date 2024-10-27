import React from 'react';
import AppNavigator from './navigation/AppNavigation';
import { SafeAreaView } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 , backgroundColor : '#fff' , marginTop : 50}}>
      <AppNavigator />
    </SafeAreaView>



  );
};

export default App;
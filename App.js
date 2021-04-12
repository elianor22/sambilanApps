import React from 'react'
import { View, Text } from 'react-native'
import Home from './src/container/Home'
import Login from './src/screen/auth/Login'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {ExploreScreen,DetailScreen, CheckoutScreen} from './src/screen'


export default function App() {
  const Stack = createStackNavigator();
  return (
    // <NavigationContainer>
    //   <Stack.Navigator
    //     screenOptions={{
    //       headerShown: false,
    //     }}>
    //     <Stack.Screen name="Home" component={Home} />
    //     <Stack.Screen name="Explore" component={ExploreScreen} />
    //     <Stack.Screen name="Detail" component={DetailScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <View style={{flex:1}}>
      <CheckoutScreen />
    </View>
  );
}

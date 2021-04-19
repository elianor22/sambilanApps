import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import Home from './src/container/Home';
import Login from './src/screen/auth/Login';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {
  ExploreScreen,
  DetailScreen,
  CheckoutScreen,
  ActivityScreen,
  LoginScreen,
  RegisterScreen,
  SplashScreen,
  SuccessScreen,
} from './src/screen';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';


export default function App() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  console.log('isloading', isLoading);

   useEffect(() => {
       const usersRef = firestore().collection('users');
       auth().onAuthStateChanged(user => {
         if (user) {
           usersRef
             .doc(user.uid)
             .get()
             .then(document => {
               const userData = document.data();
               
               setUser(userData);
              })
              .catch(error => {
                console.log(error);
              });
            
         }
       });
       setInterval(function () {
         setIsLoading(false)
       }, 3000);

     return () => {
       setInterval()
     }
   }, [])

  const Stack = createStackNavigator();

  return (
    <>
      {isLoading ? (
        <View style={{flex: 1, backgroundColor: 'white'}}>
          <SplashScreen />
        </View>
      ) : (
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}>
            {user ? (
              <>
                <Stack.Screen name="Home">
                  {props => <Home {...props} extraData={user} />}
                </Stack.Screen>
                <Stack.Screen name="Explore">
                  {props => <ExploreScreen {...props} extraData={user} />}
                </Stack.Screen>
                <Stack.Screen name="Detail" component={DetailScreen} />
                <Stack.Screen name="Checkout" component={CheckoutScreen} />
                <Stack.Screen name="Success" component={SuccessScreen} />
                <Stack.Screen name="login" component={LoginScreen} />
                <Stack.Screen name="register" component={RegisterScreen} />
              </>
            ) : (
              <>
                <Stack.Screen name="login" component={LoginScreen} />
                <Stack.Screen name="register" component={RegisterScreen} />
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </>
  );
}

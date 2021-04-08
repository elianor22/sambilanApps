import React from 'react'
import { View,StyleSheet } from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';


import HomeScreen from './src/screen/homeScreen/HomeScreen'
import ProfileScreen from './src/screen/profileScreen/ProfileScreen';

import Icon from 'react-native-vector-icons/Ionicons';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import ActivityScreen from './src/screen/activityScreen/ActivityScreen';
import ExploreScreen from './src/screen/exploreScreen/ExploreScreen';


export default function App() {
 
  const Tab = createBottomTabNavigator();

  const IconBottom = (props) => {

    return(
      <Icon name="comments" />
    )
  }


  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          tabBarOptions={{
            activeTintColor: '#FF6F00',
          }}>
          <Tab.Screen
            name="home"
            component={HomeScreen}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({color, size}) => (
                <Icon name="home" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="category"
            component={ExploreScreen}
            options={{
              tabBarLabel: 'Explore',
              tabBarIcon: ({color, size}) => (
                <Icon name="compass" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="activity"
            component={ActivityScreen}
            options={{
              tabBarLabel: 'Activity',
              tabBarIcon: ({color, size}) => (
                <Icon name="albums" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="profile"
            component={ProfileScreen}
            options={{
              tabBarLabel: 'Profile',
              tabBarIcon: ({color, size}) => (
                <Icon name="person" color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
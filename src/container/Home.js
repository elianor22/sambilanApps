import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';


import HomeScreen from '../screen/homeScreen/HomeScreen';
import ProfileScreen from '../screen/profileScreen/ProfileScreen';
import ActivityScreen from '../screen/activityScreen/ActivityScreen';
import ExploreScreen from '../screen/exploreScreen/ExploreScreen';

import Icon from 'react-native-vector-icons/Ionicons';
import {SafeAreaProvider} from 'react-native-safe-area-context';




const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


export default function Home() {




  return (
    <SafeAreaProvider>
      <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          activeTintColor: '#FF6F00',

          style: {
            borderRadius: 50,
            position: 'absolute',
            bottom: 15,
            height: 60,
            marginHorizontal: '10%',
         
          },
          labelStyle: {
            fontSize: 13,
            marginTop: -10,
            paddingBottom: 5,
          },
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
        {/* <Tab.Screen
            name="category"
            component={ExploreScreen}
            options={{
              tabBarLabel: 'Explore',
              tabBarIcon: ({color, size}) => (
                <Icon name="compass" color={color} size={size} />
              ),
            }}
          /> */}
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
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

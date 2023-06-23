

import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '../../screens/UserOutsidee/HomeScreen/HomeScreen';
import FeaturedScreen from '../../screens/UserOutsidee/FeaturedScreen/FeaturedScreen';
import ChatScreen from '../../screens/UserOutsidee/Chat/ChatScreen/ChatScreen';
import ChatlistScreen from '../../screens/UserOutsidee/Chat/ChatlistScreen/ChatlistScreen';
import UserScreen from '../../screens/UserOutsidee/UserScreen/UserScreen';

const UserOutsidee_BottomTab_Navigation = () => {

  const Tab = createBottomTabNavigator();
  return (


    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        headerShown:false
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="FeaturedScreen"
        component={FeaturedScreen}
        options={{
          tabBarLabel: 'Featured',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="note" color={color} size={size} />
          ),
         
        }}
      />
      <Tab.Screen
        name="ChatlistScreen"
        component={ChatlistScreen}
        options={{
          tabBarLabel: 'Chat',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="chat" color={color} size={size} />
          ),
          tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="UserScreen"
        component={UserScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default UserOutsidee_BottomTab_Navigation

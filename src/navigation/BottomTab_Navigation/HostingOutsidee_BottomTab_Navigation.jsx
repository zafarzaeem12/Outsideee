

import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import EventHomeScreen from '../../screens/HostingOutsidee/EventHomeScreen/EventHomeScreen';
import EventChatScreen from '../../screens/HostingOutsidee/EventChatScreen/EventChatScreen/EventChatScreen';
import EventUserScreen from '../../screens/HostingOutsidee/EventUserScreen/EventUserScreen';


const HostingOutsidee_BottomTab_Navigation = () => {

    const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
    initialRouteName="Home"
    screenOptions={{
      tabBarActiveTintColor: '#e91e63',
    }}
  >
      <Tab.Screen
      name="Home"
      component={EventHomeScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Chat"
      component={EventChatScreen}
      options={{
        tabBarLabel: 'Updates',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="bell" color={color} size={size} />
        ),
        tabBarBadge: 3,
      }}
    />
    <Tab.Screen
      name="User"
      component={EventUserScreen}
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

export default HostingOutsidee_BottomTab_Navigation

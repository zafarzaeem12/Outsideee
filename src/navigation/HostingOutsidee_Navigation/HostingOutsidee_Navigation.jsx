import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EventHomeScreen from '../../screens/HostingOutsidee/EventHomeScreen/EventHomeScreen';
import EventPostScreen from '../../screens/HostingOutsidee/EventPostScreen/EventPostScreen';
import EventDetailScreen from '../../screens/HostingOutsidee/EventDetailScreen/EventDetailScreen';
import EventUserScreen from '../../screens/HostingOutsidee/EventUserScreen/EventUserScreen';
import EventSettingScreen from '../../screens/HostingOutsidee/EventSettingScreen/EventSettingScreen';
import EventPoliciesScreen from '../../screens/HostingOutsidee/EventPoliciesScreen/EventPoliciesScreen';
import EventEditProfileScreen from '../../screens/HostingOutsidee/EventEditProfileScreen/EventEditProfileScreen';
import EventHelpScreen from '../../screens/HostingOutsidee/EventHelpScreen/EventHelpScreen';
import ChatlistScreen from '../../screens/HostingOutsidee/EventChatScreen/ChatlistScreen/ChatlistScreen';
import EventChatScreen from '../../screens/HostingOutsidee/EventChatScreen/EventChatScreen/EventChatScreen';
import HostingOutsidee_BottomTab_Navigation from '../BottomTab_Navigation/HostingOutsidee_BottomTab_Navigation';




const HostingOutsidee_Navigation = () => {

    const HostingOutsidee = createNativeStackNavigator();

    return (
        <HostingOutsidee.Navigator screenOptions={{ headerShown:false }}>
            
            <HostingOutsidee.Screen name="HostingOutsidee_BottomTab_Navigation" component={HostingOutsidee_BottomTab_Navigation} />
            <HostingOutsidee.Screen name="EventHomeScreen" component={EventHomeScreen} />
            <HostingOutsidee.Screen name="EventPostScreen" component={EventPostScreen} />
            <HostingOutsidee.Screen name="EventDetailScreen" component={EventDetailScreen} />
            <HostingOutsidee.Screen name="EventUserScreen" component={EventUserScreen} />
            <HostingOutsidee.Screen name="EventSettingScreen" component={EventSettingScreen} />
            <HostingOutsidee.Screen name="EventPoliciesScreen" component={EventPoliciesScreen} />
            <HostingOutsidee.Screen name="EventEditProfileScreen" component={EventEditProfileScreen} />
            <HostingOutsidee.Screen name="EventHelpScreen" component={EventHelpScreen} />
            <HostingOutsidee.Screen name="ChatlistScreen" component={ChatlistScreen} />
            <HostingOutsidee.Screen name="EventChatScreen" component={EventChatScreen} />
        </HostingOutsidee.Navigator>
    )
}

export default HostingOutsidee_Navigation

const styles = StyleSheet.create({})
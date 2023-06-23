import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import EventsScreen from '../../screens/UserOutsidee/EventsScreen/EventsScreen';
import FeaturedScreen from '../../screens/UserOutsidee/FeaturedScreen/FeaturedScreen';
import HelpScreen from '../../screens/UserOutsidee/HelpScreen/HelpScreen';
import HomeScreen from '../../screens/UserOutsidee/HomeScreen/HomeScreen';
import PoliciesScreen from '../../screens/UserOutsidee/PoliciesScreen/PoliciesScreen';
import RatingScreen from '../../screens/UserOutsidee/RatingScreen/RatingScreen';
import SettingScreen from '../../screens/UserOutsidee/SettingScreen/SettingScreen';
import UserScreen from '../../screens/UserOutsidee/UserScreen/UserScreen';
import ChatScreen from '../../screens/UserOutsidee/Chat/ChatScreen/ChatScreen';
import ChatlistScreen from '../../screens/UserOutsidee/Chat/ChatlistScreen/ChatlistScreen';
import UserOutsidee_BottomTab_Navigation from '../BottomTab_Navigation/UserOutsidee_BottomTab_Navigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const UserOutsidee_Navigation = () => {

    const UserOutsidee = createNativeStackNavigator();


    return (
        <UserOutsidee.Navigator screenOptions={{ headerShown:false }}>
            <UserOutsidee.Screen name="UserOutsidee_BottomTab_Navigation" component={UserOutsidee_BottomTab_Navigation} />
            <UserOutsidee.Screen name="HomeScreen" component={HomeScreen} />
            <UserOutsidee.Screen name="EventsScreen" component={EventsScreen} />
            <UserOutsidee.Screen name="FeaturedScreen" component={FeaturedScreen} />
            <UserOutsidee.Screen name="HelpScreen" component={HelpScreen} />
            <UserOutsidee.Screen name="PoliciesScreen" component={PoliciesScreen} />
            <UserOutsidee.Screen name="RatingScreen" component={RatingScreen} />
            <UserOutsidee.Screen name="SettingScreen" component={SettingScreen} />
            <UserOutsidee.Screen name="UserScreen" component={UserScreen} />
            <UserOutsidee.Screen name="ChatScreen" component={ChatScreen} />
            <UserOutsidee.Screen name="ChatlistScreen" component={ChatlistScreen} />
        </UserOutsidee.Navigator>
    )
}

export default UserOutsidee_Navigation

const styles = StyleSheet.create({})
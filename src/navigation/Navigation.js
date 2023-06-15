
import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Auth_Navigation from './Auth_Navigation/Auth_Navigation';
import HostingOutsidee_Navigation from './HostingOutsidee_Navigation/HostingOutsidee_Navigation';
import UserOutsidee_Navigation from './UserOutsidee_Navigation/UserOutsidee_Navigation';

const Navigation = () => {
    const Outsideee = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Outsideee.Navigator>
                <Outsideee.Screen
                    name="Auth_Navigation"
                    component={Auth_Navigation}
                    options={{ headerShown: false }}
                />
                <Outsideee.Screen
                    name="HostingOutsidee_Navigation"
                    component={HostingOutsidee_Navigation}
                    options={{ headerShown: false }}
                />
                <Outsideee.Screen
                    name="UserOutsidee_Navigation"
                    component={UserOutsidee_Navigation}
                    options={{ headerShown: false }}
                />
            </Outsideee.Navigator>
        </NavigationContainer>
    )
}

export default Navigation
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../../screens/Auth/SplashScreen/SplashScreen';
import PreloginScreen from '../../screens/Auth/PreloginScreen/PreloginScreen';
import SigninScreen from '../../screens/Auth/SigninScreen/SigninScreen';
import SignupScreen from '../../screens/Auth/SignupScreen/SignupScreen';
import ForgetpasswordScreen from '../../screens/Auth/ForgetpasswordScreen/ForgetpasswordScreen';
import OtpScreen from '../../screens/Auth/OtpScreen/OtpScreen';
import ResetpasswordScreen from '../../screens/Auth/ResetpasswordScreen/ResetpasswordScreen';
import UserselectionScreen from '../../screens/Auth/UserselectionScreen/UserselectionScreen';


const Auth_Navigation = () => {

    const AuthStack = createNativeStackNavigator();

    return (
        <AuthStack.Navigator>
            <AuthStack.Screen name="SplashScreen" component={SplashScreen} />
            <AuthStack.Screen name="PreloginScreen" component={PreloginScreen} />
            <AuthStack.Screen name="SigninScreen" component={SigninScreen} />
            <AuthStack.Screen name="SignupScreen" component={SignupScreen} />
            <AuthStack.Screen name="ForgetpasswordScreen" component={ForgetpasswordScreen} />
            <AuthStack.Screen name="OtpScreen" component={OtpScreen} />
            <AuthStack.Screen name="ResetpasswordScreen" component={ResetpasswordScreen} />
            <AuthStack.Screen name="UserselectionScreen" component={UserselectionScreen} />
        </AuthStack.Navigator>
    )
}

export default Auth_Navigation

const styles = StyleSheet.create({})
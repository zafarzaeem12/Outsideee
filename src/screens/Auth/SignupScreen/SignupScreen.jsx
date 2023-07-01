import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet ,Image ,Platform } from 'react-native';
import AuthBackground from '../../../components/AuthBackground';
// import CustomBackground from '../../../components/AppContainer/CustomBackground';
import { ProfileTextInput } from '../../../components/ProfileTextInput';
import Icons from '../../../assets/Icons';
import { useDispatch , useSelector } from 'react-redux'
import CustomButton from '../../../components/CustomButton';
import { theme } from '../../../assets/fonts/fonts';
import {  Add_New_User } from '../../../redux/thunk/UserReducers'
import DeviceInfo from 'react-native-device-info';
import axios from 'axios';
const SignupScreen = ({ navigation }) => {
  const dispatch = useDispatch()
  
  useSelector((state) => console.log('check this methods' , state))
  const [username , setusername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm_password, setconfirmpassword] = useState('');
  const [visible, setVisible] = useState(false);

  const handleForgetPassword = () => {
    navigation.navigate("ForgetPassword");
  };

  const handleSignup = async () => {
    const device_token = DeviceInfo.getDeviceId();
  
    var data = JSON.stringify({
      "name": username,
      "email": email,
      "password": password,
      "confirm_password": confirm_password,
      "device_token": device_token,
      "device_type": Platform.OS
    });

    dispatch(Add_New_User(data));   
  };
  
  const UserSelector = () => {
    navigation.navigate("UserSelector");
  };


  return (
    <AuthBackground profile={false} back={true} title={"Register"} >
        <View style={styles.maincontainer} keyboardShouldPersistTaps="handled">
        <View style={{ alignSelf: 'center' }}>
        <Image
          source={require('../../../assets/Images/splashlogo.png')}
          style={styles.logo}
        />

      </View>
          <View style={styles.container}>
          <ProfileTextInput
              placeholder='Andrew smith'
              heading="User name"
              value={username}
              onChangeText={text => setusername(text)}
              icon={Icons.user}
              label={'Password'}
            />
            <ProfileTextInput
              placeholder='johnsmith@gmail.com'
              heading="Email Address"
              value={email}
              onChangeText={text => setEmail(text)}
              label={'Email'}
              icon={Icons.email}
            />
           
            <ProfileTextInput
              placeholder='•••••••••••••••'
              heading="Password"
              value={password}
              onChangeText={text => setPassword(text)}
              icon={Icons.password}
              secureTextEntry={!visible}
              label={'Password'}
            />
             <ProfileTextInput
              placeholder='•••••••••••••••'
              heading="Confirm Password"
              value={confirm_password}
              onChangeText={text => setconfirmpassword(text)}
              icon={Icons.password}
              secureTextEntry={!visible}
              label={'Confirm Password'}
            />
           
            <CustomButton
              buttonStyle={styles.btn}
              title="Signup"
              onPress={() => handleSignup()}
            />
          </View>
        </View>
        <View style={styles.btm}>
          <Text style={styles.btmtxt}>
            Already have an account?{' '}
            <Text onPress={UserSelector} style={styles.heading}>
              Signup
            </Text>
          </Text>
        </View>
      
    </AuthBackground>
  );
};

export default React.memo(SignupScreen);

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    alignItems: 'center',
    width: '90%',
    alignSelf:'center'
    
  },
  container: {
    alignItems: 'center',
    backgroundColor: 'rgba(118,158,190,300)',
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: theme.color.white,
    paddingHorizontal: 15,
    paddingVertical: 15,
   
  
  },
  touchable: {
    alignSelf: "center",
    marginTop: 20
  },
  btn: {
    paddingHorizontal:50,
    marginTop: '10%',
  },
  btm: {
    marginTop: 10,
    alignSelf: 'center'
  },
  btmtxt: {
    fontSize: 15,
    fontFamily: '400',
    color: theme.color.white,
  },
  heading: {
    fontFamily: theme.font.black,
    color: theme.color.white,
    fontSize: 15,
    textDecorationLine: 'underline',
  },
  logo: {
    width: 170,
    height: 170,
    resizeMode: 'contain',

  },
})
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet ,Image } from 'react-native';
import AuthBackground from '../../../components/AuthBackground';
// import CustomBackground from '../../../components/AppContainer/CustomBackground';
import { ProfileTextInput } from '../../../components/ProfileTextInput';
import Icons from '../../../assets/Icons';

import CustomButton from '../../../components/CustomButton';
import { theme } from '../../../assets/fonts/fonts';

const ForgetpasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [visible, setVisible] = useState(false);



  const UserSelector = () => {
    navigation.navigate("OtpScreen");
  };


  return (
    <AuthBackground profile={false} back={true} title={"Forget Password"} >
        <View style={styles.maincontainer} keyboardShouldPersistTaps="handled">
        <View style={{ alignSelf: 'center' }}>
        <Image
          source={require('../../../assets/Images/splashlogo.png')}
          style={styles.logo}
        />

      </View>
          <View style={styles.container}>
            <ProfileTextInput
              placeholder='johnsmith@gmail.com'
              heading="Email Address"
              // value={email}
              // onChangeText={text => setEmail(text)}
              label={'Email'}
              icon={Icons.email}
            />
            <CustomButton
              buttonStyle={styles.btn}
              title="Reset"
              onPress={UserSelector}
            />
          </View>
        </View>
       
      
    </AuthBackground>
  );
};

export default React.memo(ForgetpasswordScreen);

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
    fontWeight: theme.font.light,
    color: theme.color.white,
  },
  heading: {
    fontWeight: theme.font.light,
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
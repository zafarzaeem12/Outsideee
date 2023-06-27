import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet
} from 'react-native';

import CustomButton from '../../../components/CustomButton';
import Icons from '../../../assets/Icons';
import OTPTextInput from 'react-native-otp-textinput';
import AuthBackground from '../../../components/AuthBackground';
import { theme } from '../../../assets/fonts/fonts';

const OTP = ({ route , navigation }) => {
  const [code, setCode] = useState('');
  const [timerCode, setTimerCode] = useState(60);
  const [resend, setResend] = useState(false);
  const otpInputRef = useRef(null);

  useEffect(() => {
    startInterval();

    return () => {
      clearInterval();
    };
  }, []);

  const startInterval = () => {
    clearInterval(timer);
    const timer = setInterval(() => {
      setTimerCode((prevTimerCode) => {
        if (prevTimerCode < 1) {
          clearInterval(timer);
          setResend(true);
        }
        return prevTimerCode - 1;
      });
    }, 1000);
  };

  const handleContinue = async () => {
    navigation.navigate('UserselectionScreen');
  };

  const handleResend = async () => {
    // await resendVerifyCode(route.params.user_id);
    setTimerCode(60);
    setResend(false);
    startInterval();
  };

  return (
    <AuthBackground back profile={false} title={'OTP Verification'}>
        <View style={{ alignSelf: 'center' }}>
        <Image
          source={require('../../../assets/Images/splashlogo.png')}
          style={styles.logo}
        />

      </View>
        <ScrollView
          bounces={false}
          showsVerticalScrollIndicator={false}
          style={{ flexGrow: 1 }}
          contentContainerStyle={{
            alignItems: 'center',
            flexGrow: 1,
          }}>
          <OTPTextInput
            autoFocusOnLoad={false}
            tintColor={theme.color.grey}
            inputCount={4}
            ref={otpInputRef}
            textInputStyle={{
              borderBottomWidth: 1,
              color: theme.color.grey,
            }}
            containerStyle={{
              height: 80,
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 5,
            }}>
            <View
              style={{
                flexDirection: 'column',
                alignItems: 'center',
                marginVertical: '10%',
              }}>
              <Image
                style={{
                  height: 50,
                  width: 50,
                }}
                source={Icons.clock}
                resizeMode="contain"
              />
              <Text
                style={{
                  marginTop: 10,
                  color: '#fff',
                  alignSelf: 'center',
                }}>
                00:{timerCode}
              </Text>
            </View>
          </View>

          <CustomButton
            title={'CONTINUE'}
            onPress={handleContinue}
            buttonStyle={{ marginBottom: 40 }}
            label={''}
          />
          <Text
            onPress={resend ? handleResend : null}
            style={{
              color: '#fff',
              fontFamily: resend ? '600' : '300',
              alignSelf: 'center',
              fontSize: 14,
              position: 'absolute',
              top: 410,
            }}>
            Didn't Receive Code?{' '}
            <Text
              style={{
                fontSize: 16,
                fontFamily: '500',
              }}>
              Resend
            </Text>
          </Text>
        </ScrollView>
      
    </AuthBackground>
  );
};

export default React.memo(OTP);

const styles = StyleSheet.create({

  logo: {
    width: 170,
    height: 170,
    resizeMode: 'contain',

  },
})
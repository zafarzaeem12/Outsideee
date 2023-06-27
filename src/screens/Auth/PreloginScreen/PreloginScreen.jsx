import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Image, Platform, Dimensions, Animated, StyleSheet } from 'react-native';
import RNBounceable from "@freakycoder/react-native-bounceable";
import { theme } from '../../../assets/fonts/fonts';
import Icons from '../../../assets/Icons';
import AuthBackground from '../../../components/AuthBackground';
//import Animated, { FadeIn, FadeOut } from    'react-native-reanimated';
const { width, height } = Dimensions.get('window');

const PreloginScreen = ({ navigation }) => {
  const [showModal, setShowModal] = useState(false);
  const [currentOption, setCurrentOption] = useState('');
  const fadeInAnimation = useRef(new Animated.Value(15)).current;

  useEffect(() => {
    animateButtons();
  }, []);

  const animateButtons = () => {
    Animated.stagger(200, [
      Animated.timing(fadeInAnimation, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const methods = [
    {
      name: 'Email',
      icon: Icons.email,
      onPress: () => navigation.navigate('SigninScreen'),
      color: theme.color.purple,
    },
    {
      name: 'Facebook',
      icon: Icons.facebook,
      color: theme.color.facebook,
    },
    {
      name: 'Google',
      icon: Icons.google,
      color: theme.color.google,
    },
    {
      name: 'Apple',
      icon: Icons.apple,
      color: theme.color.apple,
    },
  ];

  return (
    <AuthBackground back={false} title={"Pre Login"} profile={false}>
      <View style={{ alignSelf: 'center' }}>
        <Image
          source={require('../../../assets/Images/splashlogo.png')}
          style={styles.logo}
        />

      </View>
      <View style={styles.maincontainer}>
        <View style={styles.container}>
          {methods.map((method, i) => {
            const { color, name, icon, onPress } = method;
            if (Platform.OS !== 'ios' && name === 'Apple ID') return null;
            return (
              <Animated.View
                key={i}
                style={[
                  styles.animatedView,
                  {
                    opacity: fadeInAnimation,
                    transform: [
                      {
                        translateY: fadeInAnimation.interpolate({
                          inputRange: [0, 1],
                          outputRange: [50, 0],
                        }),
                      },
                    ],
                  },
                ]}
              >
                <RNBounceable
                  bounceFriction={0.8}
                  onPress={onPress}
                  activeOpacity={0.8}
                  style={[
                    styles.bounceableView,
                    {
                      backgroundColor: color,
                    },
                  ]}
                >
                  <Image source={icon} style={styles.icon} />
                  <Text style={styles.buttonText}>
                    Sign in with {name}
                  </Text>
                </RNBounceable>
              </Animated.View>
            );
          })}
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            By signing up you agree to our{' '}
            <Text
              style={styles.linkText}
              onPress={() => NavService.navigate('TermsCondition')}
            >
              Terms & Condition
            </Text>{' '}
            and{' '}
            <Text
              style={styles.linkText}
              onPress={() => NavService.navigate('PrivacyPolicy')}
            >
              Privacy Policy
            </Text>
          </Text>
        </View>
      </View>
    </AuthBackground>
  );
};

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    marginTop: 70,

  },
  container: {
    alignItems: 'center',
    flex: 1,
    width: '100%',

  },
  animatedView: {
  },
  bounceableView: {
    borderRadius: 10,
    width: width - 70,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    height: 55,
    justifyContent: 'center',
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.23,
    shadowRadius: 12.81,
    elevation: 16
  },
  icon: {
    marginRight: 20,
    width: 20,
    height: 20,
    resizeMode: 'contain',
    tintColor: theme.color.white,
    position: 'absolute',
    left: width / 8,
  },
  buttonText: {
    fontFamily: theme.font.light,
    color: theme.color.white,
    position: 'absolute',
    left: width / 4,
    fontSize: 15,
    fontFamily: theme?.font?.regular
  },
  textContainer: {
    width: '80%',
  },
  text: {
    color: theme.color.white,
    textAlign: 'center',
    fontSize: 16,
  },
  linkText: {
    fontFamily: theme.font.light,
    textDecorationLine: 'underline',
  },
  logo: {
    width: 170,
    height: 170,
    resizeMode: 'contain',

  },
});

export default React.memo(PreloginScreen);
import { StyleSheet, Text, View, Button, Image } from 'react-native'
import React, { useEffect } from 'react'
import AuthBackground from '../../../components/AuthBackground'
import LottieView from 'lottie-react-native';
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
} from 'react-native-reanimated';
const SplashScreen = ({ navigation }) => {
  const logoOpacity = useSharedValue(1); // Initial opacity is set to 0

  useEffect(() => {
    // Trigger animation on component mount
    logoOpacity.value = withTiming(1, {
      duration: 9000, // Animation duration
      easing: Easing.ease, // Easing function (optional)
    });
    const timeout = setTimeout(() => {
      navigation.navigate('PreloginScreen'); // Replace 'LoginScreen' with the actual name of your login screen component
    }, 9000);

    // Clean up the timeout on component unmount
    return () => clearTimeout(timeout);
  }, []);




  const logoStyle = useAnimatedStyle(() => {
    return {
      opacity: logoOpacity.value, // Apply animated opacity
    };
  });
  return (
    <AuthBackground>
      <Animated.View style={[styles.logoContainer, styles.container, logoStyle]}>
        <Image
          source={require('../../../assets/Images/splashlogo.png')}
          style={styles.logo}
        />
      </Animated.View>
    </AuthBackground>
  )
}

export default SplashScreen

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    opacity: 1, // Initial opacity is set to 0
  },
  logo: {
    width: 230,
    height: 180,
    resizeMode: 'contain',

  },
})
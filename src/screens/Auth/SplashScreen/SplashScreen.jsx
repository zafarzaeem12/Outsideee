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
      duration: 5000, // Animation duration
      easing: Easing.ease, // Easing function (optional)
    });
    const timeout = setTimeout(() => {
      navigation.navigate('PreloginScreen'); // Replace 'LoginScreen' with the actual name of your login screen component
    }, 5000);

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
        <LottieView
          source={require('../../../assets/animations/70719-blue-spinner-2.json')}
          autoPlay
          loop
          style={{ width: 600, height: 600, position:'absolute',}}
        />
      </Animated.View>
    </AuthBackground>
  )
}

export default React.memo(SplashScreen)

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position:'relative',
    marginTop:-50
  },
  logoContainer: {
    opacity: 1, // Initial opacity is set to 0
  },
  logo: {
    width: 130,
    height: 130,
    resizeMode: 'contain',
    position:'absolute',
    bottom:"43%"

  },
})
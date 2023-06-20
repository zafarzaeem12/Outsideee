import React from 'react';
import { Dimensions, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
const { width } = Dimensions.get('screen');
import Icons from '../assets/Icons';
import LinearGradient from 'react-native-linear-gradient';
import RNBounceable from "@freakycoder/react-native-bounceable";
import { theme } from '../../src/assets/fonts/fonts';

export default function CustomButton(props) {
  const { color, title, onPress, buttonStyle, textStyle, disabled, nextBtn } =
    props;
  return (
    <RNBounceable
      bounceVelocityIn={2}
      disabled={disabled}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <LinearGradient
        colors={['#4B0082', '#260041']}
        style={[
          {
            width: width - 70,
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '5%',
            borderRadius: 10,
            flexDirection: 'row',


          },
          buttonStyle,
        ]}
      >
        <Text style={[{
          fontSize: theme?.fontSize?.medium,
          fontFamily: 'bold', color:'#fff', textTransform: 'capitalize',
        }, textStyle]}>
          {title}
        </Text>
        {nextBtn && (
          <Image
            resizeMode="contain"
            source={Icons.next}
            style={{
              height: 22,
              width: 22,
              marginLeft: '4%',
            }}
          />
        )}
      </LinearGradient>
    </RNBounceable>
  );
}

const styles = StyleSheet.create({})
import React, { useState } from 'react';
import { TouchableOpacity, View, Image, TextInput, Text } from 'react-native';
import { Fumi } from './AnimatedTextInput';
import { theme } from '../../src/assets/fonts/fonts';
export function ProfileTextInput(props) {
    const { icon, heading } = props;
    return (
      <View style={{ marginTop: 10 }}>
        <Text
          style={{
            color: theme.color.black,
            fontSize: theme?.fontSize?.small,
            fontFamily: theme?.font?.bold
          }}>
          {heading}
        </Text>
        <View
          style={{
            width: '100%',
            borderRadius: 10,
            paddingHorizontal: 10,
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: theme.color.white,
            marginTop: 8,
          }}>
          <Image
            source={icon}
            style={{
              width: 20,
              height: 20,
              resizeMode: 'contain',
              tintColor: theme.color.black,
            }}
          />
          <TextInput
            style={{
              width: '100%',
              height: 50,
              color: theme.color.black,
              marginLeft: 10,
              fontSize: theme?.fontSize?.small,
              fontFamily: theme?.font?.regular
            }}
            placeholderTextColor={'grey'}
            {...props}
          />
        </View>
      </View>
    );
  }
  
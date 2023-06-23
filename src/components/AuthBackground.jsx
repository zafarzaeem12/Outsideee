import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import Images from '../assets/Images'
import Icons from '../assets/Icons'
import { theme } from '../assets/fonts/fonts'
import { getStatusBarHeight } from 'react-native-status-bar-height';

const AuthBackground = (props) => {
  const { profile, back, edit ,title,children , navigation} = props

  const onPress = () => {
    // Handle back button press
  }

  const rightIconNav = () => {
    // Handle right icon press
  }

  return (
   
    <ImageBackground source={Images.bg} style={styles.imageBackground}>
      <View style={styles.mainContainer}>
        {back && (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={onPress}
            style={styles.authTouchable}>
            <Image source={Icons.back} style={styles.backImage} />
          </TouchableOpacity>
        )}
        <View style={{ marginTop:55 }}>
          <Text style={styles.titleText}>{title}</Text>
        </View>
        {profile && (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              navigation.navigate('Profile');
            }}
            style={styles.profileButton}>
            <Image source={rightIcon} style={styles.profileImage} />
          </TouchableOpacity>
        )}
        {edit && (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={rightIconNav}
            style={styles.editButton}>
            <Image source={editeIcon} style={styles.editImage} />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.contentContainer}>{children}</View>
    </ImageBackground>

  )
}

export default AuthBackground

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
  },
  safe: { flex: 1 },
  mainContainer: {
    //marginTop: getStatusBarHeight() + 3,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  authTouchable: {
    position:'absolute',
    left:10,
    marginTop:55

  },
  backImage: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
    tintColor: theme.color.white
  },
  titleText: {
    color: theme.color.white,
    fontWeight: theme.font.light,
    fontSize: 18,
    fontFamily: theme?.font?.regular
  },
  profileButton: {
    position: 'absolute',
    right: 20,
    width: 38,
    height: 38,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: theme.color.darkGray,
  },
  profileImage: {
    width: 38,
    height: 38,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  editButton: {
    position: 'absolute',
    right: 20,
    width: 38,
    height: 38,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor:  theme.color.darkGray,
  },
  editImage: {
    width: 22,
    height: 22,
    resizeMode: 'contain',
  },
  contentContainer: {
    flex: 1,
    marginHorizontal: 20,
    marginBottom: 10,
    overflow: 'visible',
  },
})
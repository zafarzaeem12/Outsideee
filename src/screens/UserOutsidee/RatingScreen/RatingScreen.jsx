import { StyleSheet, Text, View, Image, Dimensions, FlatList, ImageBackground, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import AppBackground from '../../../components/AppBackground'
import { theme } from '../../../assets/fonts/fonts'
import Icons from '../../../assets/Icons'
import { Avatar } from '@rneui/themed';

import Swiper from 'react-native-swiper';
import NewData from '../../../components/NewData'

const { width } = Dimensions.get('window');


const RatingScreen = ({ navigation }) => {


  const data = [
    {
      id: 1,
      name: 'Badal',
      imageUrl: require('../../../assets/Images/bg-1.png'),
    },
    {
      id: 2,
      name: 'Samadnadar',
      imageUrl: require('../../../assets/Images/bg-2.png'),
    },
    {
      id: 3,
      name: 'Barish',
      imageUrl: require('../../../assets/Images/bg-3.png'),
    },
    {
      id: 4,
      name: 'Hum',
      imageUrl: require('../../../assets/Images/bg-1.png'),
    },
    {
      id: 5,
      name: 'Tum',
      imageUrl: require('../../../assets/Images/bg-2.png'),
    },
    {
      id: 6,
      name: 'Chai',
      imageUrl: require('../../../assets/Images/bg-3.png'),
    },
    {
      id: 6,
      name: 'Jadooo',
      imageUrl: require('../../../assets/Images/bg-2.png'),
    },
  ];
  return (
    <AppBackground>
      <ScrollView showsVerticalScrollIndicator={false} >
        <View style={{ flexDirection: 'row',flex:1 }}>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 20, color: theme.color.black, alignSelf: 'center', fontFamily: theme.font.bold }}>Events</Text>
          </View>
          <View style={{ justifyContent: 'flex-end' }}>
            <Image style={{ width: 25, height: 25, tintColor: 'purple' }} source={Icons.chat} />
          </View>
        </View>
        <View>

          <View style={styles.container}>


            <Swiper
              style={styles.wrapper}
              height={150}
              width={380}
              loop
              autoplay
            >
              {
                data.map((data) => (
                  <View
                    style={styles.slide}
                  >
                    <Image
                      resizeMode="stretch"
                      style={styles.image}
                      source={data.imageUrl}
                    />
                  </View>
                ))
              }

            </Swiper>
          </View>

          <View style={{ marginTop: 10 }}>
            <View style={{ flexDirection: 'row' }}>
              <Avatar
                size={64}
                rounded
                icon={{ name: 'rowing' }}
                containerStyle={{ backgroundColor: '#00a7f7', borderWidth: 3, borderColor: 'purple' }}

              />
              <View style={{ flexDirection: 'row' }}>
                <View style={{ flexDirection: 'column', marginTop: 5, justifyContent: 'center' }}>
                  <Text style={{ marginLeft: 5, marginBottom: 3, fontSize: 18, color: theme.color.black, alignSelf: 'center', fontFamily: theme.font.bold }}>Alan Keller</Text>
                  <Text style={{ marginRight: 15, marginBottom: 8, fontSize: 11, color: theme.color.black, alignSelf: 'center', fontFamily: theme.font.bold }}>Event owner</Text>
                </View>
                <View>
                  <View style={{ marginLeft: 60, marginTop: 10, flexDirection: 'row' }}>
                    <Image source={Icons.location} style={{ width: 20, height: 30 }} />
                    <Text numberOfLines={1} style={{ width: 120, marginLeft: 5, marginBottom: 8, fontSize: 11, color: theme.color.black, alignSelf: 'center', fontFamily: theme.font.bold }}>St 543. road new york usa</Text>
                  </View>

                </View>
              </View>
            </View>


          </View>

          <View>
            <Text style={{ marginLeft: 5, marginTop: 10, fontSize: 18, color: theme.color.black, alignSelf: 'flex-start', fontFamily: theme.font.bold }}>Rating & Posts</Text>
          </View>
          <View style={{ borderTopWidth: 1, borderTopColor: 'silver', marginTop: 10 }} />

          <NewData />
        </View>
      </ScrollView>
    </AppBackground>
  )
}

export default RatingScreen

const styles = StyleSheet.create({
  cardContainers: {
    width: '95%',
    height: 150,
    borderRadius: 10,
    overflow: 'hidden',
    padding: 0,
    marginRight: 2,

  },
  images: {
    width: '100%',
    height: 160,
  },
  imagess: { flex: 1, justifyContent: "center", },
  container: {
    flex: 1,
    width: '100%',
    height: 160,
    marginVertical: 10
  },
  wrapper: {

  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    width: 350,
    height: 150
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontFamily: 'bold'
  },
  image: {
    flex: 1,
    borderColor: 'purple'
  }
})
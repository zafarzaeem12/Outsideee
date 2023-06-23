import { StyleSheet, Text, View, Image, FlatList, ImageBackground, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import AppBackground from '../../../components/AppBackground'
import { theme } from '../../../assets/fonts/fonts'
import Icons from '../../../assets/Icons'
import { Card } from 'react-native-elements';
const EventsScreen = ({navigation}) => {
  const data = [
    {
      id: 1,
      imageUrl: require('../../../assets/Images/bg-1.png'),
    },
    {
      id: 2,
      imageUrl: require('../../../assets/Images/bg-2.png'),
    },
    {
      id: 3,
      imageUrl: require('../../../assets/Images/bg-3.png'),
    },
    {
      id: 4,
      imageUrl: require('../../../assets/Images/bg-1.png'),
    },
    {
      id: 5,
      imageUrl: require('../../../assets/Images/bg-2.png'),
    },
    {
      id: 6,
      imageUrl: require('../../../assets/Images/bg-3.png'),
    },
  ];
  return (
    <AppBackground>
      <ScrollView showsVerticalScrollIndicator={false} >
        <View style={{ flexDirection: 'row', }}>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 20, color: theme.color.black, alignSelf: 'center', fontFamily: theme.font.bold }}>Events</Text>
          </View>
          <View style={{ justifyContent: 'flex-end' }}>
            <Image style={{ width: 20, height: 20 }} source={Icons.filter} />
          </View>
        </View>
        <View>


          <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => navigation.navigate('RatingScreen', item)}>
                <View style={{ alignItems: 'center', flexDirection: 'row', marginTop: 5 }}>
                  <View>
                    <Text style={{ left: 18, fontSize: theme.fontSize.large, fontFamily: theme.font.regular }}>Loreum Ipsum </Text>
                  </View>
                  <View style={{ flexDirection: 'row', alignItems: 'center', position: 'absolute', right: 1 }}>
                    <Image source={Icons.starFilled} style={{ width: 17, height: 17, alignSelf: 'flex-end', marginRight: 8 }} />
                    <Text style={{ fontSize: theme.fontSize.small, fontFamily: theme.font.regular }} >213 Reviews</Text>

                  </View>

                </View>
                <Card containerStyle={styles.cardContainers}>
                  <ImageBackground
                    style={styles.images}
                    source={item.imageUrl}
                    resizeMode="cover"
                  >
                    <Image source={Icons.starEmpty} style={{ width: 20, height: 20, alignSelf: 'flex-end', right: 20, top: 15 }} />

                    <View style={{ flexDirection: 'row', alignItems: 'center', position: 'absolute', paddingTop: 110, left: 10 }}>
                      <Image source={Icons.location} style={{ width: 23, height: 35, alignSelf: 'flex-end', marginRight: 8 }} />
                      <Text style={{ fontSize: theme.fontSize.small, fontFamily: theme.font.regular, color: theme.color.white }} >31 ridget N.S.W</Text>

                    </View>
                  </ImageBackground>
                </Card>
              </TouchableOpacity>
            )}
          />

        </View>
      </ScrollView>
    </AppBackground>
  )
}

export default EventsScreen

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
  imagess: { flex: 1, justifyContent: "center", }
})
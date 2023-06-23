import { StyleSheet, Text, View, Image, FlatList ,ImageBackground ,ScrollView ,TouchableOpacity } from 'react-native'
import React from 'react'
import AppBackground from '../../../components/AppBackground'
import { theme } from '../../../assets/fonts/fonts'
import Icons from '../../../assets/Icons'
import { Card } from 'react-native-elements';

const HomeScreen = ({ navigation }) => {
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
              <Text style={{fontSize:18 , color: theme.color.black, alignSelf: 'center' ,fontFamily: theme.font.bold }}>Home</Text>
            </View>

            <View style={{ justifyContent: 'flex-end' }}>
              <Image style={{ width: 20, height: 20 }} source={Icons.notification} />
            </View>
          </View>
          <View>
            <Text style={{ left:18 , fontSize: theme.fontSize.large, fontFamily: theme.font.regular }}>Featured</Text>
              <FlatList
                data={data}
                keyExtractor={(item) => item.id.toString()}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                  <TouchableOpacity onPress={() => navigation.navigate('FeaturedScreen',item)}>
                    <Card containerStyle={styles.cardContainer}>
                      <ImageBackground
                        style={styles.image}
                        source={item.imageUrl}
                        resizeMode="cover"
                      > 
                      <Image source={Icons.starEmpty} style={{ width:20 ,height:20 ,alignSelf:'flex-end' ,right:10 ,top:5 }} />
                      <Text style={{ fontFamily:theme.font2.regular , fontSize:theme.fontSize.large,alignSelf:'center' ,paddingTop:50 , color:theme.color.black }}>Lorem</Text>
                      </ImageBackground>
                    </Card>
                  </TouchableOpacity>
                )}
                horizontal={true} // Set horizontal to true for horizontal scrolling
              />
            <FlatList
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                  <TouchableOpacity onPress={() => navigation.navigate('EventsScreen',item)}>
                      <Card containerStyle={styles.cardContainers}>
                        <ImageBackground
                          style={styles.images}
                          source={item.imageUrl}
                          resizeMode="cover"
                        > 
                        <Image source={Icons.privacyPolicy} style={{ width:25 ,height:25 ,alignSelf:'flex-end' ,right:13 ,top:8 }} />
                        <Text style={{ fontFamily:theme.font2.regular , fontSize:theme.fontSize.large,alignSelf:'center' ,paddingTop:90 , color:theme.color.black }}>Lorem</Text>
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

export default HomeScreen

const styles = StyleSheet.create({
  cardContainer: {
    width: 105,
    height: 125,
    borderRadius: 10,
    overflow: 'hidden',
    padding: 0,
    marginRight: 2,

  },
  image: {
    width: 105,
    height: 125,
  },
  images: { flex: 1, justifyContent: "center", },
  cardContainers: {
    width: '95%',
    height: 160,
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
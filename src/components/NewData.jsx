import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { theme } from '../assets/fonts/fonts'
import Icons from '../assets/Icons'
import { Avatar } from '@rneui/themed';
import StarRating from 'react-native-star-rating';
import { Card } from 'react-native-elements';
const NewData = () => {
  const [starCount, SetstarCount] = useState(4.5)
  return (
    <View style={{ marginTop: 10 ,flex:1,}}>
      <View style={{ flexDirection: 'row' ,flex:1}}>
        <Avatar
          size={64}
          rounded
          icon={{ name: 'rowing' }}
          containerStyle={{ backgroundColor: '#00a7f7', borderWidth: 3, borderColor: 'purple' }}

        />
        <View style={{ flexDirection: 'row'}}>
          <View style={{ flexDirection: 'column', marginTop: 5, justifyContent: 'center' }}>
            <Text style={{ marginLeft: 5, marginBottom: 3, fontSize: 18, color: theme.color.black, alignSelf: 'center', fontFamily: theme.font.bold }}>Alan Keller</Text>
            <View style={{ marginLeft: 10, width: 70 }}>
              <StarRating
                disabled={false}
                maxStars={5}
                starSize={15}
                halfStarEnabled={true}
                rating={starCount}
                fullStarColor={'yellow'}
                halfStarColor={'red'}
                selectedStar={(rating) => SetstarCount(rating)}
              />

            </View>
          </View>
          <View>
            <View style={{ marginLeft: 60, marginTop: 10, flexDirection: 'row' }}>
              <Text style={{ width: 120, marginTop: 12, marginLeft: 65, marginBottom: 8, fontSize: 11, color: theme.color.black, alignSelf: 'center', fontFamily: theme.font.bold }}>1 Hours ago</Text>
            </View>

          </View>
        </View>
      </View>
        <Image
          style={styles.images}
          source={require('../assets/Images/background2.jpeg')}
          imageStyle={{ borderRadius: 10 }}
          
        />
          <View style={{ marginLeft: 20, marginTop: 10, flexDirection: 'row' }}>
              <Text style={{ width: 100, marginTop: 12, color: theme.color.black ,marginBottom: 8, fontSize: 12, fontFamily: theme.font.bold , alignSelf: 'center'  }}>#ItsLit</Text>
              <Text style={{ width: 100, marginTop: 12,color: theme.color.black , marginBottom: 8, fontSize: 12, fontFamily: theme.font.bold , alignSelf: 'center' }}>#Its Vibe</Text>
              <Text style={{ width: 100, marginTop: 12, color: theme.color.black , marginBottom: 8, fontSize: 12, fontFamily: theme.font.bold , alignSelf: 'center'}}>#Need Company</Text>
            </View>

          
        

    </View>
  )
}

export default NewData

const styles = StyleSheet.create({
  cardContainers: {
    width: '100%',


  },
  images: {
    width: '100%',
    height: 190,
    borderRadius: 10,
    top:20,
    flex:1
  },
  imagess: { flex: 1, justifyContent: "center", }
})
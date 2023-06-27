import { StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Card } from 'react-native-elements';
import AuthBackground from '../../../components/AuthBackground'
import { useNavigation } from '@react-navigation/native';

import LottieView from 'lottie-react-native';

const UserselectionScreen = () => {
  const navigation = useNavigation();

  const data = [
    {
      id: 1,
      imageUrl: 'https://i.ibb.co/VCDs4nP/background.jpg',
      screen: 'UserOutsidee_Navigation'
    },
    {
      id: 2,
      imageUrl: 'https://i.ibb.co/D5Hj27n/background3.jpg',
      screen: 'HostingOutsidee_Navigation'
    }
  ]

  return (
    <AuthBackground title={"User Selection"} >
      <View style={styles.images}>
        {
          data?.length > 0 ?
            (
              data?.map((item, ind) => (
                <TouchableOpacity key={ind} onPress={() => navigation.navigate(item.screen)} >
                  <Card key={item.id} containerStyle={styles.cardContainer}>
                    <Image
                      style={styles.image}
                      source={{ uri: item?.imageUrl }}
                      resizeMode="cover"
                    />
                  </Card>
                </TouchableOpacity>
              )
              )

            )
            :
            (
              <View style={{ flex: 1 }}>
              <LottieView
                source={require('../../../assets/animations/5692-tiny-spinner (1).json')}
                autoPlay
                loop
              />
            </View>
            )
        }

      </View>
    </AuthBackground>
  )
}

export default React.memo(UserselectionScreen)

const styles = StyleSheet.create({
  cardContainer: {
    width: 340,
    height: 160,
    borderRadius: 10,
    overflow: 'hidden',
    padding: 0,
  },
  image: {
    width: 340,
    height: 160,
  },
  images: { flex: 1, justifyContent: "center", gap: 20 }
})
import { Image, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from '@expo/vector-icons/Ionicons'
import { TextColor } from '../utils/constants'
import LoginInfoContainer from '../components/login/LoginInfoContainer'
import { Link } from 'expo-router'
const placeHolderImage = require('../assets/marketplaceLogin.png')
const login = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Ionicons
          name='storefront-outline'
          size={25}
          color={TextColor}
          style={styles.headerIcon}
        />
        <Text style={styles.headerText}>MarketPlace</Text>
      </View>
      <LoginInfoContainer />
      <View style={styles.imageContainer}>
        <Image
          source={placeHolderImage}
          style={styles.image}
          resizeMode='cover'
        />
      </View>
      <View style={styles.footerContainer}>
        <Text style={styles.enquiryText}>
          For enquires contact erp@kmvl.com
        </Text>
        <Text style={styles.sponser}>Powered by P360</Text>
      </View>
    </SafeAreaView>
  )
}
export default login

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    paddingHorizontal: 20,
  },
  headerIcon: {},
  headerText: {
    fontSize: 25,
    letterSpacing: 2,
    color: TextColor,
  },
  imageContainer: {
    flex: 1,
    paddingHorizontal: 20,
    width: 400,
    height: 200,
    borderRadius: 18,
    marginHorizontal: 'auto',
  },
  image: {
    width: '100%',
    height: '100%',
  },

  footerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginVertical: 10,
  },

  enquiryText: {
    color: '#a6a6a6',
    fontSize: 10,
  },

  sponser: {
    fontSize: 10,
    color: '#a6a6a6',
  },
})

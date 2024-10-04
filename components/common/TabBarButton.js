import { Pressable, StyleSheet, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import RequestTypePicker from '../newRequest/RequestTypePicker'
import RequestTypeButton from './RequestTypeButton'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setRequestType } from '../../features/Request/requestSlice'
import { router } from 'expo-router'

const TabBarButton = () => {
  const dispatch = useDispatch()
  const [isVisible, setIsVisible] = useState(false)

  const handleSelectRequestType = (rqType) => {
    dispatch(setRequestType(rqType))
    setIsVisible(false)
    router.push('/add')
  }
  return (
    <View style={styles.circleButtonContainer}>
      <Pressable style={styles.circleButton} onPress={() => setIsVisible(true)}>
        <Ionicons name='add' size={30} color='#fff' />
      </Pressable>
      <RequestTypePicker
        isVisible={isVisible}
        onClose={() => setIsVisible(false)}
      >
        <View style={styles.requestTypesContainer}>
          <RequestTypeButton
            label='material'
            icon='cube-outline'
            onPress={() => handleSelectRequestType('material')}
          />
          <RequestTypeButton
            label='machinary'
            icon='cog-outline'
            onPress={() => handleSelectRequestType('machinary')}
          />
          <RequestTypeButton
            label='men'
            icon='person-outline'
            onPress={() => handleSelectRequestType('men')}
          />
        </View>
      </RequestTypePicker>
    </View>
  )
}
export default TabBarButton

const styles = StyleSheet.create({
  circleButtonContainer: {
    // width: 40,
    // height: 40,
    // borderWidth: 4,
    // borderColor: '#ffd33d',
    // borderRadius: 42,
    // padding: 3,
    // mar
  },
  circleButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 42,
    backgroundColor: '#333333',
    width: 50,
    height: 50,
    top: 5,
    marginHorizontal: 20,
  },
  requestTypesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 30,
  },
})

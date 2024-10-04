import { Pressable, StyleSheet, Text, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import TextColor from '../../utils/constants'

const NotificationsButton = ({ onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.notificationButton}>
        <Ionicons name='notifications-outline' size={24} color={TextColor} />
        <View style={styles.notificationCount}>
          <Text style={styles.countText}>5</Text>
        </View>
      </View>
    </Pressable>
  )
}
export default NotificationsButton

const styles = StyleSheet.create({
  notificationButton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
    position: 'relative',
  },
  notificationCount: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: 'black',
    borderRadius: 42,
    width: 20,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
    padding: 2,
  },
  countText: {
    color: 'white',
    fontSize: 12,
  },
})

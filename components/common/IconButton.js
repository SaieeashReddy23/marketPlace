import { Pressable, StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { TextColor } from '../../utils/constants'

const IconButton = ({ label, onPress, icon, size }) => {
  return (
    <View>
      <Pressable style={styles.button} onPress={onPress}>
        <Ionicons name={icon} size={size ? size : 25} color={TextColor} />
        {/* <Text style={styles.buttonLabel}>{label}</Text> */}
      </Pressable>
    </View>
  )
}
export default IconButton

const styles = StyleSheet.create({
  buttonContainer: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 3,
  },
  button: {
    alignItems: 'center',
  },
  buttonLabel: {
    color: TextColor,
    fontSize: 16,
    textTransform: 'capitalize',
    letterSpacing: 1,
  },
  buttonIcon: {
    paddingRight: 8,
  },
})

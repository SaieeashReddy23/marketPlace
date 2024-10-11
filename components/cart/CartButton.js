import { Pressable, StyleSheet, Text, View } from 'react-native'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'

const CartButton = ({ label, onPress, color, icon, labelColor, loading }) => {
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        style={[
          styles.button,
          color && { backgroundColor: color },
          loading && styles.disabledButton,
        ]}
        onPress={onPress}
        disabled={loading}
      >
        <MaterialIcons name={icon} size={16} color={labelColor} />
        <Text style={[styles.buttonLabel, labelColor && { color: labelColor }]}>
          {label}
        </Text>
      </Pressable>
    </View>
  )
}
export default CartButton

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 10,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    paddingVertical: 10,
  },
  buttonLabel: {
    fontSize: 12,
    textTransform: 'capitalize',
    letterSpacing: 1,
  },
  buttonIcon: {
    paddingRight: 8,
  },
  disabledButton: {
    backgroundColor: '#A5A5A5',
  },
})

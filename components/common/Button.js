import { Pressable, StyleSheet, Text, View } from 'react-native'

const Button = ({ label, onPress, color }) => {
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        style={[styles.button, color && { backgroundColor: color }]}
        onPress={onPress}
      >
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  )
}
export default Button

const styles = StyleSheet.create({
  buttonContainer: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: 'green',
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 16,
    textTransform: 'capitalize',
    letterSpacing: 1,
  },
  buttonIcon: {
    paddingRight: 8,
  },
})

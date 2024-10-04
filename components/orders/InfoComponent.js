import { StyleSheet, Text, View } from 'react-native'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'

const infoComponent = ({ icon, value }) => {
  return (
    <View style={styles.container}>
      <MaterialIcons name={icon} size={16} />
      <Text>{value}</Text>
    </View>
  )
}
export default infoComponent

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    minWidth: 110,
  },
})

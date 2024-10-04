import { StyleSheet, Text, View } from 'react-native'
import InfoComponent from './InfoComponent'

const OrderItem = ({ id, orderName, orderPlacedDate }) => {
  const plannedDate = '01-01-2024'
  return (
    <View style={styles.container}>
      <View style={styles.itemTwoColumnContainer}>
        <InfoComponent icon='shopping-cart' value={orderName} />
        <InfoComponent icon='archive' value='BOQ' />
      </View>
      <View style={styles.itemTwoColumnContainer}>
        <InfoComponent icon='calendar-month' value={orderPlacedDate} />
        <InfoComponent icon='calendar-month' value={plannedDate} />
      </View>
    </View>
  )
}
export default OrderItem

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    marginHorizontal: 10,
    gap: 10,
  },

  itemTwoColumnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
})

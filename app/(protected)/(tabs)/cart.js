import { FlatList, StyleSheet, Text, View } from 'react-native'
import CartItem from '../../../components/cart/CartItem'
import { useSelector } from 'react-redux'

const cart = () => {
  const { cartItems } = useSelector((store) => store.cart)

  if (cartItems.length === 0) {
    return (
      <View style={styles.container}>
        <Text>Cart is empty</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <FlatList
        scrollEnabled={true}
        data={cartItems}
        renderItem={({ item }) => <CartItem item={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}
export default cart

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    paddingVertical: 20,
    // paddingHorizontal: 30,
  },
})

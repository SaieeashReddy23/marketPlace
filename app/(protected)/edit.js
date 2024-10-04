import { useLocalSearchParams } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import EditMachinaryRequest from '../../components/edit/EditMachinaryRequest'
import EditMenRequest from '../../components/edit/EditMenRequest'
import EditMaterialRequest from '../../components/edit/EditMaterialRequest'

const edit = () => {
  const { id } = useLocalSearchParams()
  const { cartItems } = useSelector((store) => store.cart)

  const editItem = cartItems.find((item) => item.id === id)

  console.log(editItem)

  let requestTypeComponent = null

  switch (editItem.requestType.toLocaleLowerCase()) {
    case 'material':
      requestTypeComponent = <EditMaterialRequest item={editItem} />
      break
    case 'men':
      requestTypeComponent = <EditMenRequest item={editItem} />
      break
    case 'machinary':
      requestTypeComponent = <EditMachinaryRequest item={editItem} />
      break

    default:
      requestTypeComponent = (
        <View>
          <Text>Request type is not selected</Text>
        </View>
      )
      break
  }

  return <View style={styles.container}>{requestTypeComponent}</View>
}
export default edit

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
})

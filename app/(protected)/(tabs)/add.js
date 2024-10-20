import { StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import MaterialRequest from '../../../components/newRequest/MaterialRequest'
import MenRequest from '../../../components/newRequest/MenRequest'
import MachinaryRequest from '../../../components/newRequest/MachinaryRequest'

const Add = () => {
  const { requestType } = useSelector((store) => store.request)

  let requestTypeComponent = null

  switch (requestType) {
    case 'material':
      requestTypeComponent = <MaterialRequest />
      break
    case 'men':
      requestTypeComponent = <MenRequest />
      break
    case 'machinary':
      requestTypeComponent = <MachinaryRequest />
      break

    default:
      requestTypeComponent = (
        <View>
          <Text>Request type is not selected</Text>
        </View>
      )
      break
  }

  return (
    <View style={styles.container}>
      {/* Should get a modal from below to select if machinary , material , men */}
      {/* Based on the selected on appropriate form should open and place request */}
      {requestTypeComponent}
    </View>
  )
}
export default Add

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
})

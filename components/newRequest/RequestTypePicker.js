import { Modal, View, Text, Pressable, StyleSheet } from 'react-native'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
const RequestTypePicker = ({ isVisible, children, onClose }) => {
  return (
    <Modal animationType='slide' transparent={true} visible={isVisible}>
      <View style={styles.modalContent}>
        {/* <View style={styles.titleContainer}>
          <Text style={styles.title}>Choose Request Type</Text>
          <Pressable onPress={onClose}>
            <MaterialIcons name='close' color='#fff' size={22} />
          </Pressable>
        </View> */}
        {children}
        <View style={styles.closeBtnContainer}>
          <Pressable onPress={onClose}>
            <MaterialIcons name='close' size={30} />
          </Pressable>
        </View>
      </View>
    </Modal>
  )
}
export default RequestTypePicker

const styles = StyleSheet.create({
  modalContent: {
    height: '20%',
    width: '100%',
    backgroundColor: '#fff',
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    position: 'absolute',
    bottom: 0,
  },
  titleContainer: {
    height: '16%',
    backgroundColor: '#464C55',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: '#fff',
    fontSize: 16,
  },

  closeBtnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
  },
})

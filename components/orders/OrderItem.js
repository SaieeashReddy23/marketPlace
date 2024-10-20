import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { useState } from 'react'
import InfoComponent from './InfoComponent'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'

const OrderItem = (orderItem) => {
  const plannedDate = '01-01-2024'

  const { id, orderName, orderPlacedDate } = orderItem
  const [modalVisible, setModalVisible] = useState(false)

  const closeModal = () => {
    console.log('order details modal closed')
    setModalVisible(false)
  }

  const handleOpenOrderDetails = () => {
    console.log('order details modal open')
    setModalVisible(true)
  }

  return (
    <View>
      <Pressable onPress={handleOpenOrderDetails} style={styles.container}>
        <View style={styles.itemTwoColumnContainer}>
          <InfoComponent icon='shopping-cart' value={orderName} />
          <InfoComponent icon='archive' value='BOQ' />
        </View>
        <View style={styles.itemTwoColumnContainer}>
          <InfoComponent icon='calendar-month' value={orderPlacedDate} />
          <InfoComponent icon='calendar-month' value={plannedDate} />
        </View>
      </Pressable>

      <Modal
        animationType='fade'
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.closeBtnContainer}>
              <Pressable onPress={closeModal}>
                <MaterialIcons name='close' size={30} />
              </Pressable>
            </View>
            <Text>Order details will be shown here</Text>
          </View>
        </View>
      </Modal>
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

  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    width: '90%',
    height: '60%',
    borderRadius: 10,
    padding: 10,
  },

  closeBtnContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },

  closeButton: {
    marginTop: 20,
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
  },
})

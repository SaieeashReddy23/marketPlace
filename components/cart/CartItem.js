import { Modal, Pressable, StyleSheet, Text, View } from 'react-native'
import { useState } from 'react'
import Button from '../common/Button'
import { useDispatch } from 'react-redux'
import { deleteItem, editItem } from '../../features/cart/cartSlice'
import { router } from 'expo-router'
import CartButton from './CartButton'
import InfoComponent from './InfoComponent'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'

const colors = {
  Machinary: '#FFD580',
  Material: '#A7D899',
  Men: '#A3C9F9',
}

const CartItem = ({ item }) => {
  const {
    id,
    projectCode,
    requiredMaterial,
    requiredQuantity,
    plannedDate,
    requestType,
    requiredMachinary,
    plannedFrom,
    plannedTo,
  } = item
  const dispatch = useDispatch()

  const [modalVisible, setModalVisible] = useState(false)

  const closeModal = () => {
    console.log('cart Request details modal closed')
    setModalVisible(false)
  }

  const handleOpenRequestDetails = () => {
    console.log('cart Request details modal open')
    setModalVisible(true)
  }

  const handleDelete = () => {
    dispatch(deleteItem(id))
  }

  const handleEditItem = () => {
    router.push({
      pathname: '/edit',
      params: {
        id,
      },
    })
  }

  if (requestType === 'Machinary') {
    return (
      <View style={styles.itemContainer}>
        {/* Details of cart */}
        {/* <Text>{projectCode}</Text> */}

        <View
          style={[styles.requestType, { backgroundColor: colors[requestType] }]}
        >
          <Text style={styles.requestTypeText}>{requestType}</Text>
        </View>

        <Pressable
          onPress={handleOpenRequestDetails}
          style={styles.itemDetails}
        >
          <View style={styles.itemTwoColumnContainer}>
            <InfoComponent
              icon='shopping-cart'
              value={`${requiredMachinary} - ${requiredQuantity}`}
            />
            <InfoComponent icon='archive' value='BOQ' />
          </View>
          <View style={styles.itemTwoColumnContainer}>
            <InfoComponent icon='calendar-month' value={plannedFrom} />
            <InfoComponent icon='calendar-month' value={plannedTo} />
          </View>
        </Pressable>
        {/* Buttons */}
        <View style={[styles.twoColumnContainer]}>
          <View style={{ width: '48%' }}>
            <CartButton label='edit' onPress={handleEditItem} icon='edit' />
          </View>
          <View style={{ width: '48%' }}>
            <CartButton
              label='delete'
              onPress={handleDelete}
              icon='delete'
              color='#D9534F'
              labelColor='white'
            />
          </View>
        </View>

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
              <Text>Cart Request Details will be shown here</Text>
            </View>
          </View>
        </Modal>
      </View>
    )
  }

  return (
    <View style={styles.itemContainer}>
      {/* Details of cart */}
      {/* <Text>{projectCode}</Text> */}

      <View
        style={[styles.requestType, { backgroundColor: colors[requestType] }]}
      >
        <Text style={styles.requestTypeText}>{requestType}</Text>
      </View>

      <Pressable style={styles.itemDetails} onPress={handleOpenRequestDetails}>
        <View style={styles.itemTwoColumnContainer}>
          <InfoComponent
            icon='shopping-cart'
            value={`${requiredMaterial} - ${requiredQuantity}`}
          />
          <InfoComponent icon='archive' value='BOQ' />
        </View>
        <View style={styles.itemTwoColumnContainer}>
          <InfoComponent icon='calendar-month' value={plannedDate} />
          <InfoComponent icon='calendar-month' value={plannedDate} />
        </View>
      </Pressable>
      {/* Buttons */}
      <View style={[styles.twoColumnContainer]}>
        <View style={{ width: '48%' }}>
          <CartButton label='edit' onPress={handleEditItem} icon='edit' />
        </View>
        <View style={{ width: '48%' }}>
          <CartButton
            label='delete'
            onPress={handleDelete}
            icon='delete'
            color='#D9534F'
            labelColor='white'
          />
        </View>
      </View>

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
            <Text>Cart Request Details will be shown here</Text>
          </View>
        </View>
      </Modal>
    </View>
  )
}
export default CartItem

const styles = StyleSheet.create({
  itemContainer: {
    borderWidth: 1,
    borderColor: '#f2f2f2',
    padding: 10,
    marginBottom: 20,
    borderRadius: 10,
    gap: 20,
    marginHorizontal: 20,
    position: 'relative',
    overflow: 'hidden',
  },

  requestType: {
    position: 'absolute',
    top: 0,
    right: 0,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },

  requestTypeText: {
    color: 'white',
    fontSize: 8,
    letterSpacing: 1,
  },

  itemDetails: {
    gap: 10,
  },

  itemTwoColumnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },

  twoColumnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderColor: '#f2f2f2',
    paddingTop: 10,
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

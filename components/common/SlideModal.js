import { Modal, View, Text, Pressable, StyleSheet } from 'react-native'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'

const SlideModal = ({ isVisible, children, onClose, modalHeight }) => {
  return (
    <Modal
      animationType='slide'
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.modalBackground}>
        <View
          style={[styles.modalContent, modalHeight && { height: modalHeight }]}
        >
          <View style={styles.closeBtnContainer}>
            <Pressable onPress={onClose}>
              <MaterialIcons name='close' size={30} />
            </Pressable>
          </View>
          {children}
        </View>
      </View>
    </Modal>
  )
}
export default SlideModal

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Transparent black background
  },
  modalContent: {
    height: '100%',
    width: '100%',
    backgroundColor: '#fff',
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    position: 'absolute',
    bottom: 0,
    padding: 20,
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
    justifyContent: 'flex-end',
  },
})

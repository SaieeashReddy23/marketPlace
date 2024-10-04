import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native'
import IconButton from '../common/IconButton'
import { TextColor } from '../../utils/constants'
import { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../features/cart/cartSlice'
import { useFocusEffect } from 'expo-router'
import DatePickerComponent from '../common/DatePickerComponent'
import CartButton from '../cart/CartButton'
import SearchInput from '../common/SearchInput'

const initialState = {
  projectCode: '',
  warehouse: '',
  deliveryLocation: '',
  projectActivity: '',
  requiredMaterial: '',
  requiredQuantity: 0,
  plannedDate: '',
  requestType: 'Material',
}

const MaterialRequest = () => {
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({ ...initialState })

  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const setPlannedDate = (value) => {
    handleChange('plannedDate', value)
  }

  const handleAddToCart = () => {
    // Keyboard.dismiss()
    dispatch(addToCart(formData))
    setFormData({ ...initialState })
  }

  const handlePlaceRequest = () => {}

  useFocusEffect(
    useCallback(() => {
      // This code runs when the tab is focused
      return () => {
        // This code runs when the tab is no longer focused (unmounted)
        setFormData({ ...initialState }) // Reset form data when tab is left
      }
    }, [])
  )

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} // Adjust behavior based on the platform
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <SearchInput
          label='Project'
          placeholder='Enter the project'
          value={formData.projectCode}
          handleChange={(value) => handleChange('projectCode', value)}
        />
        <SearchInput
          label='Delivery Location'
          placeholder='Enter the Warehouse'
          value={formData.warehouse}
          handleChange={(value) => handleChange('warehouse', value)}
        />
        <SearchInput
          label='Warehouse'
          placeholder='Enter the Delivery location'
          value={formData.deliveryLocation}
          handleChange={(value) => handleChange('deliveryLocation', value)}
        />
        <SearchInput
          label='Project Activity'
          placeholder='Enter the project activity'
          value={formData.projectActivity}
          handleChange={(value) => handleChange('projectActivity', value)}
        />
        <SearchInput
          label='Required Material'
          placeholder='Enter the Required Material'
          value={formData.requiredMaterial}
          handleChange={(value) => handleChange('requiredMaterial', value)}
        />

        {/* <View style={styles.inputFormContainer}>
          <Text style={styles.inputFormHeader}>Required Material</Text>
          <View style={styles.inputFormValueContainer}>
            <TextInput
              placeholder='Enter the Required Material'
              style={styles.inputText}
              value={formData.requiredMaterial}
              onChangeText={(value) => handleChange('requiredMaterial', value)}
            />
            <IconButton icon='search' />
          </View>
        </View> */}
        <View style={styles.twoColumnContainer}>
          <View style={[styles.twoColumnInfoFormContainer, { width: '48%' }]}>
            <Text style={styles.inputFormHeader}>Req Quantity</Text>
            <View style={styles.inputFormValueContainer}>
              <TextInput
                placeholder='Req qty'
                style={styles.inputText}
                value={formData.requiredQuantity}
                onChangeText={(value) =>
                  handleChange('requiredQuantity', value)
                }
              />
              {/* <IconButton icon='search' /> */}
            </View>
          </View>
          <View style={[styles.twoColumnInfoFormContainer, { width: '48%' }]}>
            <Text style={styles.inputFormHeader}>planned Date</Text>
            <View style={styles.inputFormValueContainer}>
              <TextInput
                placeholder='planned date'
                style={styles.inputText}
                value={formData.plannedDate}
                editable={false}
                // onChangeText={(value) => handleChange('plannedDate', value)}
              />
              <DatePickerComponent setValue={setPlannedDate} />
            </View>
          </View>
        </View>

        <View style={[styles.twoColumnContainer, { marginTop: 30 }]}>
          <View style={{ width: '48%' }}>
            <CartButton
              label='Add to cart'
              onPress={handleAddToCart}
              icon='shopping-cart'
            />
          </View>
          <View style={{ width: '48%' }}>
            <CartButton
              label='Place Request'
              onPress={handlePlaceRequest}
              icon='edit'
              color='green'
              labelColor='white'
            />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}
export default MaterialRequest

const styles = StyleSheet.create({
  twoColumnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    marginHorizontal: 10,
  },
  twoColumnInfoFormContainer: {
    gap: 5,
    marginBottom: 10,
  },

  inputFormContainer: {
    gap: 5,
    marginBottom: 10,
    marginHorizontal: 10,
  },

  inputFormHeader: {
    fontWeight: 'semibold',
    color: '#8c8c8c',
    letterSpacing: 1,
    left: 5,
  },
  inputFormValueContainer: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#d9d9d9',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  inputFormValueText: {},

  inputText: {
    color: TextColor,
    letterSpacing: 1,
    width: '80%',
    outlineStyle: 'none',
  },
})

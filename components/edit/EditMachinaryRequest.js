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
import { addToCart, editItem } from '../../features/cart/cartSlice'
import { router, useFocusEffect } from 'expo-router'
import DatePickerComponent from '../common/DatePickerComponent'
import CartButton from '../cart/CartButton'
import SearchInput from '../common/SearchInput'

const initialState = {
  projectCode: '',
  warehouse: '',
  projectActivity: '',
  requiredMachinary: '',
  requiredQuantity: 0,
  shiftType: '',
  plannedFrom: '',
  plannedTo: '',
  plannedTime: '',
  workQuantity: 0,
  requestType: 'Machinary',
}

const EditMachinaryRequest = ({ item }) => {
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({ ...item })

  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const setPlannedDate = (value) => {
    handleChange('plannedDate', value)
  }

  const setDateValue = (key, value) => {
    handleChange(key, value)
  }

  const handleAddToCart = () => {
    // Keyboard.dismiss()
    dispatch(addToCart(formData))
  }

  const handleCancel = () => {
    router.replace('/cart')
  }

  const handleSave = () => {
    console.log(formData)
    dispatch(editItem(formData))
    router.replace('/cart')
  }

  useFocusEffect(
    useCallback(() => {
      // This code runs when the tab is focused
      setFormData({ ...item })
      return () => {
        // This code runs when the tab is no longer focused (unmounted)
        setFormData({}) // Reset form data when tab is left
      }
    }, [item])
  )

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} // Adjust behavior based on the platform
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {/* <View style={styles.inputFormContainer}>
          <Text style={styles.inputFormHeader}>Project</Text>
          <View style={styles.inputFormValueContainer}>
            <TextInput
              placeholder='Enter the project'
              style={styles.inputText}
              value={formData.projectCode}
              onChangeText={(value) => handleChange('projectCode', value)}
            />
            <IconButton icon='search' />
          </View>
        </View> */}
        <SearchInput
          label='Project'
          placeholder='Enter the project'
          value={formData.projectCode}
          handleChange={(value) => handleChange('projectCode', value)}
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
          label='Required Machinary'
          placeholder='Enter the Required Machinary'
          value={formData.requiredMachinary}
          handleChange={(value) => handleChange('requiredMachinary', value)}
        />
        <View style={styles.twoColumnContainer}>
          <View style={[styles.twoColumnInfoFormContainer, { width: '48%' }]}>
            <Text style={styles.inputFormHeader}>Req Quantity</Text>
            <View style={styles.inputFormValueContainer}>
              {/* <Text style={styles.inputFormValueText}>Select the project code</Text> */}
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
            <Text style={styles.inputFormHeader}>Shift Type</Text>
            <View style={styles.inputFormValueContainer}>
              <TextInput
                placeholder='Shift Type'
                style={styles.inputText}
                value={formData.shiftType}
                onChangeText={(value) => handleChange('shiftType', value)}
              />
              {/* <IconButton icon='calendar' /> */}
            </View>
          </View>
        </View>
        <View style={styles.twoColumnContainer}>
          <View style={[styles.twoColumnInfoFormContainer, { width: '48%' }]}>
            <Text style={styles.inputFormHeader}>Planned From</Text>
            <View style={styles.inputFormValueContainer}>
              <TextInput
                placeholder='Planned From'
                style={styles.inputText}
                value={formData.plannedFrom}
                editable={false}
              />
              <DatePickerComponent
                setValue={(value) => setDateValue('plannedFrom', value)}
              />
            </View>
          </View>
          <View style={[styles.twoColumnInfoFormContainer, { width: '48%' }]}>
            <Text style={styles.inputFormHeader}>Planned To</Text>
            <View style={styles.inputFormValueContainer}>
              <TextInput
                placeholder='Planned To'
                style={styles.inputText}
                value={formData.plannedTo}
                editable={false}
              />
              <DatePickerComponent
                setValue={(value) => setDateValue('plannedTo', value)}
              />
            </View>
          </View>
        </View>
        <View style={styles.twoColumnContainer}>
          <View style={[styles.twoColumnInfoFormContainer, { width: '48%' }]}>
            <Text style={styles.inputFormHeader}>Planned Time</Text>
            <View style={styles.inputFormValueContainer}>
              {/* <Text style={styles.inputFormValueText}>Select the project code</Text> */}
              <TextInput
                placeholder='Planned Time'
                style={styles.inputText}
                value={formData.plannedTime}
                onChangeText={(value) => handleChange('plannedTime', value)}
              />
              {/* <IconButton icon='search' /> */}
            </View>
          </View>
          <View style={[styles.twoColumnInfoFormContainer, { width: '48%' }]}>
            <Text style={styles.inputFormHeader}>Working Quantity</Text>
            <View style={styles.inputFormValueContainer}>
              <TextInput
                placeholder='Working quantity'
                style={styles.inputText}
                value={formData.workQuantity}
                onChangeText={(value) => handleChange('workQuantity', value)}
              />
              {/* <IconButton icon='calendar' /> */}
            </View>
          </View>
        </View>
        <View style={[styles.twoColumnContainer, { marginTop: 30 }]}>
          <View style={{ width: '48%' }}>
            <CartButton label='Cancel' onPress={handleCancel} />
          </View>
          <View style={{ width: '48%' }}>
            <CartButton
              label='Save'
              onPress={handleSave}
              color='green'
              labelColor='white'
            />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}
export default EditMachinaryRequest

const styles = StyleSheet.create({
  twoColumnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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

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
import { PlaceRequestUrl, TextColor } from '../../utils/constants'
import { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../features/cart/cartSlice'
import { useFocusEffect } from 'expo-router'
import DatePickerComponent from '../common/DatePickerComponent'
import CartButton from '../cart/CartButton'
import SearchInput from '../common/SearchInput'
import ProjectSearchInput from '../common/searchInputs/ProjectSearchInput'
import WarehouseSearchInput from '../common/searchInputs/WarehouseSearchInput'
import ProjectActivitySearchInput from '../common/searchInputs/ProjectActivitySearchInput'
import RequiredMaterialSearchInput from '../common/searchInputs/RequiredMaterialSearchInput'
import axios from 'axios'

const formatDate = (dateString) => {
  if (dateString === '') {
    return ''
  }
  const dateOnly = dateString.split(' ')[0]
  return dateOnly
}
const initialState = {
  projectId: '',
  projectDesc: '',
  warehouseId: '',
  warehouseDesc: '',
  activityId: '',
  activityDesc: '',
  itemId: '',
  itemDesc: '',
  itemGroupId: '',
  itemGroupDesc: '',
  assetId: 'ASSET123',
  assetDesc: 'Cement Mixer',
  uomId: '',
  uom: '',
  quantity: 0,
  requiredDate: '',
  requestType: 'Material',
}

const MaterialRequest = () => {
  const dispatch = useDispatch()
  const { accessToken } = useSelector((store) => store.auth)
  const [formData, setFormData] = useState({ ...initialState })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const setPlannedDate = (value) => {
    handleChange('requiredDate', value)
  }

  const handleAddToCart = () => {
    // Keyboard.dismiss()
    dispatch(addToCart(formData))
    setFormData({ ...initialState })
  }

  const handlePlaceRequest = async () => {
    const reqBody = { ...formData, requestType: 'PURCHASE' }
    console.log('url : ', PlaceRequestUrl)
    console.log('Req Body : ', reqBody)
    console.log('access token : ', accessToken)

    try {
      setIsLoading(true)
      const resp = await axios.post(
        PlaceRequestUrl,
        { ...reqBody },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json', // Optional, depends on your API
          },
        }
      )
      setIsLoading(false)
      console.log('Resp : ', JSON.stringify(resp.data))
      // setFormData({ ...initialState })
      alert('You have successfully placed Request')
    } catch (error) {
      console.log(error)
      setIsLoading(false)
      alert('some error occured while submitting request , pls try again')
    }
  }

  useFocusEffect(
    useCallback(() => {
      // This code runs when the tab is focused
      return () => {
        // This code runs when the tab is no longer focused (unmounted)
        setFormData({ ...initialState }) // Reset form data when tab is left
      }
    }, [])
  )

  // console.log('form data : ', JSON.stringify(formData))

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} // Adjust behavior based on the platform
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {/* <SearchInput
          label='Project'
          placeholder='Enter the project'
          value={formData.projectCode}
          handleChange={handleChange}
        /> */}
        <ProjectSearchInput
          label='Project'
          placeholder='Enter the project'
          value={formData.projectDesc}
          handleChange={setFormData}
        />
        <WarehouseSearchInput
          label='Warehouse'
          placeholder='Enter the Warehouse'
          value={formData.warehouseDesc}
          handleChange={setFormData}
          projectId={formData.projectId}
        />
        <ProjectActivitySearchInput
          label='Project Activity'
          placeholder='Enter the project activity'
          value={formData.activityDesc}
          handleChange={setFormData}
          projectId={formData.projectId}
        />

        <RequiredMaterialSearchInput
          label='Required Material'
          placeholder='Enter the Required Material'
          value={formData.itemDesc}
          handleChange={setFormData}
          id='requiredMaterial'
        />
        {/* <SearchInput
          label='Required Material'
          placeholder='Enter the Required Material'
          value={formData.requiredMaterial}
          handleChange={(value) => handleChange('requiredMaterial', value)}
        /> */}

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
                onChangeText={(value) => handleChange('quantity', value)}
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
                value={formatDate(formData.requiredDate)}
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
              loading={isLoading}
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

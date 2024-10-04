import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import 'react-native-get-random-values'
import { v4 as uuidv4 } from 'uuid'

const generateUniqueId = () => {
  return uuidv4()
}

const dummyCartData = [
  {
    id: '1',
    projectCode: 'project 1',
    warehouse: 'kurnool warehouse',
    deliveryLocation: 'kurnool',
    projectActivity: 'cement activity',
    requiredMaterial: 'cement',
    requiredQuantity: '45 bags',
    plannedDate: '01-01-2024',
    requestType: 'Material',
  },
  {
    id: '2',
    projectCode: 'project 2',
    warehouse: 'jammal warehouse',
    deliveryLocation: 'jammal',
    projectActivity: 'Tiles activity',
    requiredMaterial: 'Tiles',
    requiredQuantity: '45 packets',
    plannedDate: '01-01-2024',
    requestType: 'Material',
  },
  {
    id: '3',
    projectCode: 'project 3',
    warehouse: 'kurnool warehouse',
    deliveryLocation: 'kurnool',
    projectActivity: 'bricks activity',
    requiredMaterial: 'Bricks',
    requiredQuantity: '45 tons',
    plannedDate: '01-01-2024',
    requestType: 'Material',
  },
  {
    id: '4',
    projectCode: 'project 4',
    requiredMaterial: 'Bricks',
    requiredQuantity: '04 Tons',
    plannedDate: '21-01-2024',
    requestType: 'Men',
  },
  {
    id: '5',
    projectCode: 'project 5',
    warehouse: '',
    projectActivity: '',
    requiredMachinary: 'CNC machine',
    requiredQuantity: 100,
    shiftType: '',
    plannedFrom: '20-09-2024',
    plannedTo: '20-10-2024',
    plannedTime: '',
    workQuantity: 0,
    requestType: 'Machinary',
  },
  {
    id: '6',
    projectCode: 'project 6',
    warehouse: '',
    projectActivity: '',
    requiredMachinary: 'Bull dozer ',
    requiredQuantity: 1,
    shiftType: '',
    plannedFrom: '20-09-2024',
    plannedTo: '20-10-2024',
    plannedTime: '',
    workQuantity: 0,
    requestType: 'Machinary',
  },
]

const initialState = {
  cartItems: [...dummyCartData],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newRequest = { ...action.payload, id: generateUniqueId() }
      state.cartItems.push(newRequest)
    },
    deleteItem: (state, action) => {
      const id = action.payload
      const updatedCartItems = state.cartItems.filter((item) => item.id != id)
      state.cartItems = updatedCartItems
    },
    editItem: (state, action) => {
      const { id } = action.payload
      const index = state.cartItems.findIndex((item) => item.id === id)
      console.log(index)
      if (index !== -1) {
        state.cartItems[index] = action.payload
      }
    },
  },
})

export const { addToCart, deleteItem, editItem } = cartSlice.actions

export default cartSlice.reducer

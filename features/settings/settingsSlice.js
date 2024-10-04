import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  theme: 'light',
  notificationsEnabled: true,
}

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {},
})

export default settingsSlice.reducer

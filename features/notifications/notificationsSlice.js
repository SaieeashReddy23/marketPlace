import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  notifications: [],
  unreadCount: 0,
  loading: false,
  error: false,
}

const notificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {},
})

export default notificationsSlice.reducer

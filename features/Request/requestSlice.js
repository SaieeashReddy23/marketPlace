import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
  requestType: null,
}

const requestSlice = createSlice({
  name: 'request',
  initialState,
  reducers: {
    setRequestType: (state, action) => {
      state.requestType = action.payload
    },
  },
})

export const { setRequestType } = requestSlice.actions

export default requestSlice.reducer

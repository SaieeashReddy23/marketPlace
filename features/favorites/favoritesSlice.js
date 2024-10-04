import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  favorites: [],
  loading: false,
  error: false,
}

const favoritesSlice = createSlice({
  name: 'favoritesSlice',
  initialState,
  reducers: {},
})

export default favoritesSlice.reducer

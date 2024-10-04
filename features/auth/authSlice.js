import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import AsyncStorage from '@react-native-async-storage/async-storage'

const dummUserInfo = {
  userName: 'Ganesh',
  userMailId: 'ganesh@gmail.com',
  userMobileNumber: '9848348362',
  assignedProjects: [
    {
      id: 1,
      projectName: 'project 1',
      projectCode: 'project code 1',
    },
    {
      id: 2,
      projectName: 'project 2',
      projectCode: 'project code 2',
    },
    {
      id: 3,
      projectName: 'project 3',
      projectCode: 'project code 3',
    },
    {
      id: 4,
      projectName: 'project 4',
      projectCode: 'project code 4',
    },
    {
      id: 5,
      projectName: 'project 5',
      projectCode: 'project code 5',
    },
    {
      id: 6,
      projectName: 'project 3',
      projectCode: 'project code 3',
    },
    {
      id: 7,
      projectName: 'project 4',
      projectCode: 'project code 4',
    },
    {
      id: 8,
      projectName: 'project 5',
      projectCode: 'project code 5',
    },
  ],
}

const initialState = {
  isLoggedIn: false,
  userInfo: null,
  loading: false,
  error: null,
  token: null,
}

export const login = createAsyncThunk(
  'auth/login',
  async (userCredentials, { rejectWithValue }) => {
    try {
      const { mobileNumber, otp } = userCredentials
      // Simulating an API call (replace with your real API)
      // const response = await fetch('https://example.com/login', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({ username, password }),
      // })

      // if (!response.ok) {
      //   throw new Error('Login failed!')
      // }

      // const data = await response.json()
      return ' retutn token and user details' // This would normally include a token or user info
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

// Thunk to check if a token exists in AsyncStorage when the app starts
export const initializeAuth = createAsyncThunk(
  'auth/initializeAuth',
  async () => {
    const token = await AsyncStorage.getItem('authToken')
    let userInfo = await AsyncStorage.getItem('userInfo')
    if (userInfo) {
      userInfo = JSON.parse(userInfo)
    }

    return { userInfo, token }
  }
)

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.userInfo = null
      state.isLoggedIn = false
      state.token = null
      AsyncStorage.removeItem('authToken')
      AsyncStorage.removeItem('userInfo')
    },
    loadAuthData: (state, action) => {
      const { userInfo, token } = action.payload
      state.userInfo = userInfo
      state.token = token
      state.isLoggedIn = true
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoggedIn = true
        state.userInfo = dummUserInfo
        state.loading = false
        state.error = null
        state.token = '93y4529834203948230'
        AsyncStorage.setItem('authToken', '93y4529834203948230')
        AsyncStorage.setItem('userInfo', JSON.stringify(dummUserInfo))
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
      .addCase(initializeAuth.pending, (state, auth) => {
        state.loading = true
      })
      .addCase(initializeAuth.fulfilled, (state, action) => {
        const { token, userInfo } = action.payload
        state.isLoggedIn = true
        state.userInfo = userInfo
        state.loading = false
        state.error = null
        state.token = token
      })
  },
})

export const { logout, loadAuthData } = authSlice.actions

export default authSlice.reducer

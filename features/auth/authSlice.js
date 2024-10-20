import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import {
  dummyLoginInfo,
  logoutUrl,
  sendOtpUrl,
  verifyOtpUrl,
} from '../../utils/constants'

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
  isOtpSent: false,
  sessionToken: null,
  refreshToken: null,
  accessToken: null,
  mobileNumber: '',
  isDemoUser: false,
}

export const sendOtp = createAsyncThunk(
  'auth/sendOtp',
  async (mobileNumber, { rejectWithValue }) => {
    try {
      console.log(mobileNumber)
      const response = await axios.post(`${sendOtpUrl}/+91${mobileNumber}`)
      return {
        sessionToken: response.data?.data,
        mobileNumber: mobileNumber,
      }
    } catch (error) {
      console.log(error)
      if (error?.response?.data?.errors.length > 0) {
        return rejectWithValue(error?.response?.data?.errors[0])
      }
      return rejectWithValue(error.message)
    }
  }
)

export const verifyOtp = createAsyncThunk(
  'auth/verifyOtp',
  async (otp, { getState, rejectWithValue }) => {
    try {
      const { mobileNumber, sessionToken } = getState().auth
      const reqBody = {
        username: `+91${mobileNumber}`,
        session: sessionToken,
        confirmationCode: otp,
      }

      console.log(reqBody)
      const response = await axios.post(`${verifyOtpUrl}`, {
        ...reqBody,
      })

      return response.data
    } catch (error) {
      if (error?.response?.data?.errors.length > 0) {
        return rejectWithValue(error?.response?.data?.errors[0])
      }
      return rejectWithValue(error.message)
    }
  }
)

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue, getState }) => {
    try {
      const { mobileNumber, sessionToken, isDemoUser } = getState().auth
      if (!isDemoUser) {
        const response = await axios(`${logoutUrl}/+91${mobileNumber}`)
      }
    } catch (error) {
      console.log(error)
      if (error?.response?.data?.errors.length > 0) {
        return rejectWithValue(error?.response?.data?.errors[0])
      }
      return rejectWithValue(error.message)
    }
  }
)

// Thunk to check if a token exists in AsyncStorage when the app starts
export const initializeAuth = createAsyncThunk(
  'auth/initializeAuth',
  async () => {
    const accessToken = await AsyncStorage.getItem('accessToken')
    let userInfo = await AsyncStorage.getItem('userInfo')
    let refreshToken = await AsyncStorage.getItem('refreshToken')
    if (userInfo) {
      userInfo = JSON.parse(userInfo)
    }

    return { userInfo, accessToken, refreshToken }
  }
)

const authSlice = createSlice({
  name: 'auth',
  initialState: { ...initialState },
  reducers: {
    loadAuthData: (state, action) => {
      const { userInfo, token } = action.payload
      state.userInfo = userInfo
      state.token = token
      state.isLoggedIn = true
    },
    setMobileNumber: (state, action) => {
      state.mobileNumber = action.payload
    },
    setError: (state, action) => {
      state.error = action.payload
    },
    setDemoUser: (state) => {
      const { accessToken, refreshToken, idToken, user, userVerified } =
        dummyLoginInfo
      state.isLoggedIn = true
      state.userInfo = user
      state.loading = false
      state.error = null
      state.accessToken = accessToken
      state.isDemoUser = true
      AsyncStorage.setItem('accessToken', accessToken)
      AsyncStorage.setItem('userInfo', JSON.stringify(user))
      AsyncStorage.setItem('refreshToken', refreshToken)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendOtp.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(sendOtp.fulfilled, (state, action) => {
        const { sessionToken, mobileNumber } = action.payload
        state.loading = false
        state.error = null
        state.sessionToken = sessionToken
        state.isOtpSent = true
        state.mobileNumber = mobileNumber
      })
      .addCase(sendOtp.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
        state.isOtpSent = false
        state.mobileNumber = ''
      })
      .addCase(verifyOtp.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(verifyOtp.fulfilled, (state, action) => {
        const { accessToken, refreshToken, idToken, user, userVerified } =
          action.payload
        state.isLoggedIn = true
        state.userInfo = user
        state.loading = false
        state.error = null
        state.accessToken = accessToken
        AsyncStorage.setItem('accessToken', accessToken)
        AsyncStorage.setItem('userInfo', JSON.stringify(user))
        AsyncStorage.setItem('refreshToken', refreshToken)
      })
      .addCase(verifyOtp.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
      .addCase(logout.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(logout.fulfilled, (state) => {
        AsyncStorage.removeItem('accessToken')
        AsyncStorage.removeItem('refreshToken')
        AsyncStorage.removeItem('userInfo')
        return initialState
      })
      .addCase(logout.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
      .addCase(initializeAuth.pending, (state, auth) => {
        state.loading = true
      })
      .addCase(initializeAuth.fulfilled, (state, action) => {
        const { userInfo, accessToken, refreshToken } = action.payload
        state.isLoggedIn = true
        state.userInfo = userInfo
        state.accessToken = accessToken
        state.refreshToken = refreshToken
        state.loading = false
        state.error = null
      })
  },
})

export const { loadAuthData, setError, setMobileNumber, setDemoUser } =
  authSlice.actions

export default authSlice.reducer

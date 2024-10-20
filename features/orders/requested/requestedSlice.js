import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { ordersUrl } from '../../../utils/constants'

const dummyItems = [
  {
    id: 1,
    orderName: 'Office Supplies',
    orderPlacedDate: '2024-09-20',
    orderProjectName: 'Project Alpha',
  },
  {
    id: 2,
    orderName: 'Laptop',
    orderPlacedDate: '2024-09-21',
    orderProjectName: 'Project Beta',
  },
  {
    id: 3,
    orderName: 'Printer',
    orderPlacedDate: '2024-09-22',
    orderProjectName: 'Project Gamma',
  },
  {
    id: 4,
    orderName: 'Stationery',
    orderPlacedDate: '2024-09-23',
    orderProjectName: 'Project Delta',
  },
  {
    id: 5,
    orderName: 'Software License',
    orderPlacedDate: '2024-09-24',
    orderProjectName: 'Project Epsilon',
  },
  {
    id: 6,
    orderName: 'Tablet',
    orderPlacedDate: '2024-09-25',
    orderProjectName: 'Project Zeta',
  },
  {
    id: 7,
    orderName: 'External Hard Drive',
    orderPlacedDate: '2024-09-26',
    orderProjectName: 'Project Eta',
  },
  {
    id: 8,
    orderName: 'Monitors',
    orderPlacedDate: '2024-09-27',
    orderProjectName: 'Project Theta',
  },
  {
    id: 9,
    orderName: 'Networking Equipment',
    orderPlacedDate: '2024-09-28',
    orderProjectName: 'Project Iota',
  },
  {
    id: 10,
    orderName: 'Projector',
    orderPlacedDate: '2024-09-29',
    orderProjectName: 'Project Kappa',
  },
  {
    id: 11,
    orderName: 'Ergonomic Chairs',
    orderPlacedDate: '2024-09-30',
    orderProjectName: 'Project Lambda',
  },
  {
    id: 12,
    orderName: 'Whiteboard',
    orderPlacedDate: '2024-10-01',
    orderProjectName: 'Project Mu',
  },
  {
    id: 13,
    orderName: 'Camera',
    orderPlacedDate: '2024-10-02',
    orderProjectName: 'Project Nu',
  },
  {
    id: 14,
    orderName: 'Headphones',
    orderPlacedDate: '2024-10-03',
    orderProjectName: 'Project Xi',
  },
  {
    id: 15,
    orderName: 'Microphone',
    orderPlacedDate: '2024-10-04',
    orderProjectName: 'Project Omicron',
  },
  {
    id: 16,
    orderName: 'Conference Phone',
    orderPlacedDate: '2024-10-05',
    orderProjectName: 'Project Pi',
  },
  {
    id: 17,
    orderName: 'Desk Lamps',
    orderPlacedDate: '2024-10-06',
    orderProjectName: 'Project Rho',
  },
  {
    id: 18,
    orderName: 'Air Conditioner',
    orderPlacedDate: '2024-10-07',
    orderProjectName: 'Project Sigma',
  },
  {
    id: 19,
    orderName: 'Water Dispenser',
    orderPlacedDate: '2024-10-08',
    orderProjectName: 'Project Tau',
  },
  {
    id: 20,
    orderName: 'Coffee Machine',
    orderPlacedDate: '2024-10-09',
    orderProjectName: 'Project Upsilon',
  },
]

const initialState = {
  data: [],
  filters: {
    search: '',
    sortType: 'asc',
  },
  pageNo: 0,
  pageSize: 20,
  hasMoreData: true,
  loading: false,
  error: null,
}

export const getRequestedData = createAsyncThunk(
  'requested/getRequestedData',
  async (_, { rejectWithValue, getState }) => {
    try {
      const { accessToken } = getState().auth
      const { pageNo, pageSize } = getState().requested

      const reqBody = {
        pageNo,
        pageSize,
        status: 'REQUESTED',
      }

      let resp = await axios.post(
        ordersUrl,
        { ...reqBody },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json', // Optional, depends on your API
          },
        }
      )

      let recjectedList = resp.data?.data?.content
      return recjectedList
    } catch (error) {
      if (error?.response?.data?.errors?.length > 0) {
        return rejectWithValue(error?.response?.data?.errors[0])
      }
      return rejectWithValue(error.message)
    }
  }
)

const requestedSlice = createSlice({
  name: 'requested',
  initialState: { ...initialState },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRequestedData.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(getRequestedData.fulfilled, (state, action) => {
        let data = action.payload
        if (data.length > 0) {
          state.data = [...state.data, ...data]
          state.pageNo = state.pageNo + 1
        } else {
          state.hasMoreData = false
        }
        state.loading = false
        state.error = null
      })
      .addCase(getRequestedData.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  },
})

export default requestedSlice.reducer

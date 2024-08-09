import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { axiosInstance } from '@/services/axiosInterceptor';
import { notifyError } from '@/utils/Notify';
import { ResponseTypes, CounterState, ParamTypes, AsyncThunkConfig } from '../../loginSliceTypes';
import { showLoading } from '@/app/login/page';




export const initialState: CounterState = {
  confirmUserLoading: false,
  confirmUserResponse: null,
  //resendOtp
  resendOtpLoading: false,
  resendOtpResponse: null,

  //otp------------------
  otpLoading: false,
  otpResponse: null,
  //act_list------------------
  actListLoading: false,
  actListResponse: null,
  //agent_list------------------
  agentListLoading: false,
  agentListResponse: null,
  //birthDate
  birthDateLoading: false,
  birthDateResponse: null
}

//get phoneNumber---------------------------------------------

export const fetchConfirmUser = createAsyncThunk<ResponseTypes, string, AsyncThunkConfig>(
  'fetchConfirmUser',
  async (phonNumber, thunkAPI) => {
    try {
      const response = await axiosInstance.post('v3/auth/mobile', { mobile: phonNumber })
      return response?.data as ResponseTypes;
    } catch (error) {
      return thunkAPI.rejectWithValue('خطا در دریافت اطلاعات ');
    }
  },
)
//fetchResendOtp---------------------------------------
export const fetchResendOtp = createAsyncThunk<ResponseTypes, string | null, AsyncThunkConfig>(
  'fetchResendOtp',
  async (userCode, thunkAPI) => {
    try {
      const response = await axiosInstance.post('v3/auth/resend', { userCode: userCode })
      return response?.data as ResponseTypes;

    } catch (error) {
      return thunkAPI.rejectWithValue('خطا در دریافت اطلاعات ');
    }
  },
)


//fetchOtp--------------------------------------------
export const fetchOtp = createAsyncThunk<ResponseTypes, ParamTypes, AsyncThunkConfig>(
  'fetchOtp',
  async (params, thunkAPI) => {

    try {
      const response = await axiosInstance.post('v3/auth/otp', params)
      return response?.data as ResponseTypes;

    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue('خطا در دریافت اطلاعات ')
    }
  },
)

//get act_list-----------------------------------------
export const fetchActList = createAsyncThunk<ResponseTypes, void, AsyncThunkConfig>(
  'fetchActList',
  async (_, thunkAPI) => {
    try {
      const response = await axiosInstance.get('v3/auth/act-list')
      return response?.data as ResponseTypes;

    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue('خطا در دریافت اطلاعات ')
    }
  },
)


//fetchOtp--------------------------------------------
export const fetchAgentCode = createAsyncThunk<ResponseTypes, ParamTypes, AsyncThunkConfig>(
  'fetchAgentCode',
  async (params, thunkAPI) => {

    try {
      const response = await axiosInstance.post('v3/auth/agent-code', params)
      return response?.data as ResponseTypes;

    } catch (error) {
      return thunkAPI.rejectWithValue('خطا در دریافت اطلاعات ')
    }
  },
)


//fetchNationalCode--------------------------------------------
export const fetchNationalCode = createAsyncThunk<ResponseTypes, ParamTypes, AsyncThunkConfig>(
  'fetchNationalCode',
  async (params, thunkAPI) => {

    try {
      const response = await axiosInstance.post('v3/auth/national-code', params)
      return response?.data as ResponseTypes;

    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue('خطا در دریافت اطلاعات ')
    }
  },
)
//fetchBirthDate--------------------------------------------
export const fetchBirthDate = createAsyncThunk<ResponseTypes, ParamTypes, AsyncThunkConfig>(
  'fetchBirthDate',
  async (params, thunkAPI) => {

    try {
      const response = await axiosInstance.post('v3/auth/birth-date', params)
      return response?.data as ResponseTypes;

    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue('خطا در دریافت اطلاعات ')
    }
  },
)






const loginSlice = createSlice({
  name: 'loginSlice',
  initialState,
  reducers: {},
  //get phone number------------------------------------------
  extraReducers: (builder) => {
    builder.addCase(fetchConfirmUser.pending, (state) => {
      state.confirmUserLoading = true;
    })
      .addCase(fetchConfirmUser.fulfilled, (state, action: PayloadAction<ResponseTypes>) => {
        state.confirmUserLoading = false;
        if (action?.payload?.code === 200) {
          state.confirmUserResponse = action.payload;
          console.log(action.payload);
          localStorage.setItem('userCode', action.payload?.data?.userCode || '')
        } else if (action?.payload?.code === 400 || action?.payload?.code === 500) {
          notifyError(action?.payload?.message);
        }
      })
      .addCase(fetchConfirmUser.rejected, (state, action) => {
        state.confirmUserLoading = false;
        notifyError('خطا در ارتباط با سرور');
      })


      // resend otp--------------------------------------------------
      .addCase(fetchResendOtp.pending, (state, action) => {
        state.resendOtpLoading = true;

      })
      .addCase(fetchResendOtp.fulfilled, (state, action: PayloadAction<ResponseTypes>) => {
        state.resendOtpLoading = false;
        if (action?.payload?.code === 200) {
          state.resendOtpResponse = action.payload;
          console.log(action.payload);
        } else if (action?.payload?.code === 400) {
          notifyError(action?.payload?.message);
        }
      })
      .addCase(fetchResendOtp.rejected, (state, action) => {
        state.resendOtpLoading = false;
        console.log(action.payload);

      })


      // otp--------------------------------------------------
      .addCase(fetchOtp.pending, (state) => {
        state.otpLoading = true;
      })
      .addCase(fetchOtp.fulfilled, (state, action: PayloadAction<ResponseTypes>) => {
        state.otpLoading = false;

        if (action.payload.code === 200 && action.payload.success === true) {
          state.otpResponse = action.payload;
        } else
          notifyError(action?.payload?.message);

      })
      .addCase(fetchOtp.rejected, (state, action) => {
        state.otpLoading = false;
        console.log('rejected', action.payload);

      })

      // cat_list--------------------------------------------------
      .addCase(fetchActList.pending, (state) => {
        state.actListLoading = true;
      })
      .addCase(fetchActList.fulfilled, (state, action: PayloadAction<ResponseTypes>) => {
        state.actListLoading = false;

        if (action.payload.code === 200 && action.payload.success === true) {
          state.actListResponse = action.payload;
        } else
          notifyError(action?.payload?.message);

      })
      .addCase(fetchActList.rejected, (state, action) => {
        state.actListLoading = false;
        console.log('rejected', action.payload);

      })
      // fetchAgentCode--------------------------------------------------
      .addCase(fetchAgentCode.pending, (state) => {
        state.agentListLoading = true;
      })
      .addCase(fetchAgentCode.fulfilled, (state, action: PayloadAction<ResponseTypes>) => {
        state.agentListLoading = false;
        if (action.payload.code === 200 && action.payload.success === true) {
          state.agentListResponse = action.payload;
        }
      })
      .addCase(fetchAgentCode.rejected, (state, action) => {
        state.agentListLoading = false;
      })
      // fetchNationalCode--------------------------------------------------
      .addCase(fetchNationalCode.pending, (state) => {
        state.actListLoading = true;
      })
      .addCase(fetchNationalCode.fulfilled, (state, action: PayloadAction<ResponseTypes>) => {
        state.actListLoading = false;
      })
      .addCase(fetchNationalCode.rejected, (state, action) => {
        state.actListLoading = false;
      })
      // fetchBirthDate--------------------------------------------------
      .addCase(fetchBirthDate.pending, (state) => {
        state.birthDateLoading = true;
      })
      .addCase(fetchBirthDate.fulfilled, (state, action: PayloadAction<ResponseTypes>) => {
        state.birthDateLoading = false;
        state.birthDateResponse = action.payload;
      })
      .addCase(fetchBirthDate.rejected, (state, action) => {
        state.birthDateLoading = false;
      })
  }
})

// export const { incrementByAmount } = loginSlice.actions
export default loginSlice.reducer
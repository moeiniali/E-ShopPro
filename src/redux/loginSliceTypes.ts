
export interface ParamTypes {
 userCode?: string | null
 otp?: string
 agentCode?: string | null
 actId?: number
 nationalCode?: string
 birthDate?: string
}

export interface ResponseDataTypes {
 // resend otp types----------------------------------------------------------------
 canSendOtp?: boolean;
 afterSecondsCanSendOtp?: number;
 message?: string | null
 otpTime?: number | undefined
 // confirm user types----------------------------------------------------------------
 phonNumber?: string
 code?: number
 userCode?: string
 // otp types----------------------------------------------------------------

 //act_list
 id?: number,
 act?: string,
 // birthData

 name?: string
 success?: boolean

}




export interface ResponseTypes {
 data?: ResponseDataTypes
 code?: number,
 message?: string,
 success?: boolean,
 errors?: any,
 error?: string

}

export interface AsyncThunkConfig {
 rejectValue: any;
 rejectWithValue: any
}

export interface CounterState {
 confirmUserLoading: boolean,
 confirmUserResponse: ResponseTypes | null,
 //resendOtp
 resendOtpLoading: boolean
 resendOtpResponse: ResponseTypes | null,
 //otp------------------
 otpLoading: boolean,
 otpResponse: ResponseTypes | null
 //actList------------------
 actListLoading: boolean,
 actListResponse: ResponseTypes | null
 //agent list------------------
 agentListLoading: boolean,
 agentListResponse: ResponseTypes | null,
 //birthdate
 birthDateLoading?: boolean,
 birthDateResponse?: ResponseTypes | null
}



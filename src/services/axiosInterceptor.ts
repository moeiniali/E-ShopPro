import axios from "axios";
import { notifyError } from "@/utils/Notify";


export const axiosInstance = axios.create({
 baseURL: 'https://core.b2shelf.com/api/',

 headers: {
  'Content-Type': 'application/json'
 }
})


// axiosInstance.defaults.timeout = 2500;
// axiosInstance.get('/longRequest', {
//  timeout: 5000
// })


axiosInstance.interceptors.request.use((config) => {
 return config;
}, (error) => {

 console.log('interceptors.request', error)
 return Promise.reject(error)

});


axiosInstance.interceptors.response.use((config) => {
 return config;
},

 async (error) => {
  const originalRequest = error.config;

  // بررسی خطای احراز هویت (مثلاً خطای 401)
  if (error.response?.status === 401 && !originalRequest._retry) {
   originalRequest._retry = true;

   // درخواست تجدید توکن
   try {
    const response = await axiosInstance.post('', {
     refreshToken: localStorage.getItem('refreshToken'),
    });
    const { token, refreshToken } = response.data;

    // ذخیره توکن‌های جدید
    localStorage.setItem('token', token);
    localStorage.setItem('refreshToken', refreshToken);

    // تنظیم هدر Authorization با توکن جدید
    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    originalRequest.headers['Authorization'] = `Bearer ${token}`;

    // درخواست اصلی را با توکن جدید دوباره ارسال کنید
    return axiosInstance(originalRequest);
   } catch (err) {
    // اگر تجدید توکن شکست خورد، کاربر را به صفحه ورود هدایت کنید
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
    window.location.href = '/auth/login';
    return Promise.reject(err);
   }
  }


  //handler error 500
  if (error.response?.status === 500) {
   notifyError('  خطا در اتصال به سرور');
   return Promise.reject(error);
  }
  //handler ERR_NETWORK-------------------------
  if (error.code === "ERR_NETWORK" && !error.response) {
   notifyError('مشکل ارتباط با سرور!, لطفا اینترنت خود را بررسی و فیلتر شکن خود را خاموش و صفحه را مجددا رفرش نمایید')

  }

  // مدیریت سایر خطاها
  return Promise.reject(error);
 }



)




'use client'
import { Provider } from 'react-redux'
import { store } from '@/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from '@/redux/store';




export default function StoreProvider({ children }: { children: React.ReactNode }) {

 return <Provider store={store}>
  <PersistGate loading={null} persistor={persistor}>
   {children}
  </PersistGate>
 </Provider>

}
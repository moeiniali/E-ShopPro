import { configureStore } from '@reduxjs/toolkit'
import loginSlice from '@/redux/slices/login/loginSlice';
import { persistReducer, persistStore } from 'redux-persist';
// Create a Redux store instance
import rootReducer from "./rootReducer";
import storage from 'redux-persist/lib/storage';

const persistConfig = {
 key: 'root',
 storage,
 blacklist: ['loginSlice'],

};

const persistedReducer = persistReducer(persistConfig, rootReducer);




const store = configureStore({
 reducer: persistedReducer,

 middleware: (getDefaultMiddleware) => getDefaultMiddleware({
  serializableCheck: false,
 })
})

const persistor = persistStore(store);
export { store, persistor };
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
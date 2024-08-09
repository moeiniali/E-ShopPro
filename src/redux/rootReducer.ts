import { combineReducers } from 'redux';
import loginSlice from './slices/login/loginSlice';


const rootReducer = combineReducers({
 loginSlice: loginSlice,

});

export default rootReducer;

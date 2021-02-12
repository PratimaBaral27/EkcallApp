import {combineReducers} from 'redux';
import authReducer from "./auth.reducers";
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
     authReducer,
    form: formReducer
   
});

export default rootReducer;
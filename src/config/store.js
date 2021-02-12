import createAsyncStorage from 'redux-persist-react-native-async-storage';
import persistCombineReducers from 'redux-persist/es/persistCombineReducers';
import persistStore from 'redux-persist/es/persistStore';
import { createStore, applyMiddleware } from 'redux';
import {logger} from 'redux-logger';
import rootReducer from '../reducers/index';

const storage = createAsyncStorage();

const config = {
    key:'root',
    storage
};

const reducer = persistCombineReducers(config, rootReducer);

 export default () => {
     const store = createStore(reducer, {}, applyMiddleware(logger));
     const persistor = persistStore(store);
      return{ persistor, store};
 }
 
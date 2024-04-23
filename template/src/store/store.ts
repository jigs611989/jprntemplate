import {configureStore, Action, StoreEnhancer} from '@reduxjs/toolkit';
import {ThunkAction} from 'redux-thunk';
import {useDispatch, useStore} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';
import rootReducer, {RootState} from './rootReducer';
import reactotron from '../../ReactotronConfig';

const enhancers: StoreEnhancer[] = __DEV__
  ? [reactotron.createEnhancer!()]
  : [];

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  enhancers: getDefaultEnhancers => {
    return getDefaultEnhancers({}).concat(enhancers)
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk: true,
      serializableCheck: false,
      immutableCheck: false,
    }),
});

export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export type AppStore = typeof store;
export const useAppStore = () => useStore<AppStore>();

export default store;

import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type UserState = {
  userId: string;
  email: string;
  firstName: string;
  lastName: string;
};

export type AppState = {
  isAuth: boolean;
  user?: UserState;
};

const initialState: AppState = {
  isAuth: false,
};

// This slice contains data related to the state of the app
const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setIsAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
    setUser: (state, action: PayloadAction<UserState>) => {
      state.user = action.payload
    },
    signOut: () => {
      return {...initialState};
    },
  },
});

export default appSlice;

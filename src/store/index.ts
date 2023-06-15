import { ThunkAction, configureStore } from '@reduxjs/toolkit';
import { createWrapper } from "next-redux-wrapper"
import { Action } from "redux"
import usersReducer from './reducers/usersReducer';

const makeStore = () =>
  configureStore({
    reducer: {
      users: usersReducer,
    },
    devTools: true
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const wrapper = createWrapper<AppStore>(makeStore);

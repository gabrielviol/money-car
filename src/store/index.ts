import { ThunkAction, configureStore } from '@reduxjs/toolkit';
import { createWrapper } from "next-redux-wrapper"
import { Action } from "redux"
import driverReducer from './reducers/driverReducer';

const makeStore = () =>
   configureStore({
      reducer: {
         drivers: driverReducer
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

import { createSlice } from '@reduxjs/toolkit';
import { AppState } from '..';
import { HYDRATE } from 'next-redux-wrapper'
import { StaticDrivers } from '@/utils/drivers';
import { stat } from 'fs';

interface Driver {
  id: string;
  name: string;
  days: number;
}

interface Carpool {
  idDriver: string;
  day: string
}

interface CarpoolState {
  drivers: Driver[]
  carpool: Carpool[]
}

const initialState: CarpoolState = {
  drivers: StaticDrivers,
  carpool: []
}

export const driver = createSlice({
  name: 'driver',
  initialState,
  reducers: {
    setDrivers(state, action) {
      state.drivers = action.payload
    },
    setCarpoolDay(state, action) {
      const { id, dayInMonth } = action.payload;
      const newDay = { idDriver: id, day: dayInMonth }
      const updatedCarpool = [...state.carpool, newDay]
      return { ...state, carpool: updatedCarpool }
    },
    getAmountDays(state, action) {
      const driverDays = state.carpool.filter(driver => driver.idDriver === action.payload.id);
      const amountDays = driverDays.length;

      const updatedDrivers = state.drivers.map(driver => {
        if (driver.id === action.payload.id) {
          return { ...driver, days: amountDays };
        }
        return driver;
      });

      return { ...state, drivers: updatedDrivers };
    }

  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.product,
      }
    }
  }
})

export const { setDrivers, setCarpoolDay, getAmountDays } = driver.actions
export const setDriversState = (state: AppState) => state.drivers.drivers;
export default driver.reducer;
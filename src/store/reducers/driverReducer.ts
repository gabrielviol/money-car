import { createSlice } from '@reduxjs/toolkit';
import { AppState } from '..';
import { HYDRATE } from 'next-redux-wrapper'
import { StaticDrivers } from '@/utils/drivers';

interface Driver {
  id: string;
  name: string;
  days: number;
}

interface Carpool {
  idDriver: string
  day: string
}

interface DriverState {
  drivers: Driver[]
  carpool: Carpool[]
}

const initialState: DriverState = {
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
    incrementDay(state, action) {
      const index = state.drivers.findIndex(driver => driver.id === action.payload.id);
      if (index !== -1) {
        state.drivers[index].days += 1;
      }
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

export const { setDrivers, incrementDay } = driver.actions
export const setDriversState = (state: AppState) => state.drivers.drivers;
export default driver.reducer;
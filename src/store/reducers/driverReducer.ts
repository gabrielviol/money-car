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
      const existDay = state.carpool.findIndex(day => day.day === dayInMonth)

      if (existDay !== -1) {
        const updatedCarpool = [...state.carpool]
        updatedCarpool[existDay] = newDay
        return { ...state, carpool: updatedCarpool }
      } else {
        const updatedCarpool = [...state.carpool, newDay]
        return { ...state, carpool: updatedCarpool }
      }

    },
    getAmountDays(state) {
      const updatedDrivers = state.drivers.map(driver => {
        const driverDays = state.carpool.filter(Driver => Driver.idDriver === driver.id)
        const amountDays = driverDays.length
        return { ...driver, days: amountDays }
      })
      return { ...state, drivers: updatedDrivers }
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
export const setDriversState = (state: AppState) => state.drivers.drivers
export const setCarpoolState = (state: AppState) => state.drivers.carpool
export default driver.reducer
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
  id: string
  dayInMonth: string
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

      const isDayTaken = state.carpool.some((carpoolDay) => carpoolDay.dayInMonth === dayInMonth);

      const sameDriver = state.carpool.find((carpoolDay) => carpoolDay.id === id);

      if (isDayTaken) {
        if (sameDriver) {
          return state; // Retorna o estado atual sem fazer nenhuma alteração
        } else {
          const previousDriverId = state.carpool.find((carpoolDay) => carpoolDay.dayInMonth === dayInMonth)?.id;
          const previousDriverIndex = state.drivers.findIndex((driver) => driver.id === previousDriverId);
          const newDriverIndex = state.drivers.findIndex((driver) => driver.id === id);

          if (previousDriverIndex !== -1 && newDriverIndex !== -1) {
            const updatedDrivers = [...state.drivers];
            updatedDrivers[previousDriverIndex].days -= 1;
            updatedDrivers[newDriverIndex].days += 1;

            //const newCarpool = 

            const updatedCarpool = [...state.carpool]
            const newCarpool = (updatedCarpool.filter(item => item.id !== updatedCarpool[previousDriverIndex].id), action.payload)
            //[...state.carpool.filter((carpoolDay) => carpoolDay.dayInMonth !== dayInMonth), action.payload];

            //return { ...state, drivers: updatedDrivers, carpool: newCarpool };
          }
        }
      } else {
        const driverIndex = state.drivers.findIndex((driver) => driver.id === id);

        if (driverIndex !== -1) {
          const updatedDriver = { ...state.drivers[driverIndex] };
          updatedDriver.days += 1;

          const updatedDrivers = [...state.drivers];
          updatedDrivers[driverIndex] = updatedDriver;

          const updatedCarpool = [...state.carpool, action.payload];

          return { drivers: updatedDrivers, carpool: updatedCarpool };
        }
      }

      return state;
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

export const { setDrivers, setCarpoolDay } = driver.actions
export const setDriversState = (state: AppState) => state.drivers.drivers;
export default driver.reducer;
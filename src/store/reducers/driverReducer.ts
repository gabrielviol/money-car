import { createSlice } from '@reduxjs/toolkit';
import { AppState } from '..';
import { StaticDrivers } from '@/utils/drivers';

interface Driver {
  id: string;
  name: string;
  days: number;
  total: number
}

interface Carpool {
  idDriver: string;
  day: string
}

interface CarpoolState {
  drivers: Driver[]
  carpool: Carpool[]
  currentMonth: string,
  valueForDay: number;
}

const initialState: CarpoolState = {
  drivers: StaticDrivers,
  carpool: [],
  currentMonth: '00',
  valueForDay: 10
}

export const driver = createSlice({
  name: 'driver',
  initialState,
  reducers: {
    setDrivers(state, action) {
      state.drivers = action.payload
    },
    setCurrentMonth(state, action) {
      state.currentMonth = action.payload
    },
    setValueForDay(state, action) {
      state.valueForDay = action.payload
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
        const currentMonth = state.carpool.filter(carpool => {
          const mes = carpool.day.slice(5, 7)
          if (mes === state.currentMonth) {
            return carpool
          }
        })
        const driverDays = currentMonth.filter(Driver => Driver.idDriver === driver.id)
        const amountDays = driverDays.length
        const amountTotalPrice = (amountDays * state.valueForDay)
        return { ...driver, days: amountDays, total: amountTotalPrice }
      })
      return { ...state, drivers: updatedDrivers }
    }
  }
})

export const { setDrivers, setCarpoolDay, getAmountDays, setCurrentMonth, setValueForDay } = driver.actions
export const setDriversState = (state: AppState) => state.drivers.drivers
export const setCarpoolState = (state: AppState) => state.drivers.carpool
export const CarpoolState = (state: AppState) => state.drivers
export default driver.reducer
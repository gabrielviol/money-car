import { createSlice } from '@reduxjs/toolkit'
import { AppState } from '..'

interface Driver {
  id: string
  name: string
  days: number
  total: number
}

interface Carpool {
  idDriver: string
  day: string
}

interface CarpoolState {
  drivers: Driver[]
  carpool: Carpool[]
  currentMonth: string,
  valueForDay: number
  driverSelected: string
}


const initialState: CarpoolState = {
  drivers: [],
  carpool: [],
  currentMonth: '',
  valueForDay: 10,
  driverSelected: 'default'
}

export const driver = createSlice({
  name: 'driver',
  initialState,
  reducers: {
    addNewDriver(state, action) {
      state.drivers = [
        ...state.drivers,
        {
          id: action.payload.id,
          name: action.payload.name,
          days: 0,
          total: 0
        }
      ]
    },
    removeDriver(state, action) {
      const newDrivers = state.drivers.filter(driver => driver.id !== action.payload)
      const newCarpool = state.carpool.filter( carpool => carpool.idDriver !== action.payload )
      return { ...state, drivers: newDrivers, carpool: newCarpool }
    },
    setCurrentMonth(state, action) {
      state.currentMonth = action.payload
    },
    setDrivers(state, action) {
      state.drivers = action.payload
    },
    setCarpool(state, action) {
      state.carpool = action.payload
    },
    setValueForDay(state, action) {
      state.valueForDay = action.payload
    },
    setCarpoolDay(state, action) {
      const { id, dayInMonth } = action.payload
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

export const {
  setCarpoolDay,
  getAmountDays,
  setCurrentMonth,
  setValueForDay,
  addNewDriver,
  removeDriver,
  setDrivers,
  setCarpool
} = driver.actions
export const setDriversState = (state: AppState) => state.drivers.drivers
export const setCarpoolState = (state: AppState) => state.drivers.carpool
export const CarpoolState = (state: AppState) => state.drivers
export default driver.reducer
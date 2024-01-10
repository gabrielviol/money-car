import { api } from "@/lib/axios"
import { setCarpool, setDrivers } from "../reducers/driverReducer"

export const fetchDrivers = () => async (dispatch: any) => {
  try {
    const response = await api.get('/getDrivers')
    const drivers = response.data
    dispatch(setDrivers(drivers))
  } catch (error) {
    console.log(error)
  }
}

export const fetchCarpool = () => async (dispatch: any) => {
  try {
    const response = await api.get('/getCarpool')
    const carpool = response.data
    dispatch(setCarpool(carpool))
  } catch (err) {
    console.error(err)
  }
}

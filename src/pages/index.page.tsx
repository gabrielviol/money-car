import { useDispatch, useSelector } from "react-redux"
import { useCallback, useEffect } from "react"

import dayjs from "dayjs"

import { Calendar } from "@/components/Calendar"
import { DriversTable } from "@/components/DriversTable"
import { ValueForDay } from "@/components/ValueForDay"
import { AddNewDriver } from "@/components/AddNewDriver"

import { fetchCarpool, fetchDrivers } from "@/store/fetchActions"
import { getAmountDays, setCurrentMonth } from "@/store/reducers/driverReducer"

import {
   Container,
   Content,
   DriversDash,
} from "./styles"

export default function Home() {
   const dispatch = useDispatch()

   useEffect(() => {
      const currentDate = dayjs().set('date', 1)
      const currentMonthNumber = currentDate.format('MM')
      

      dispatch(setCurrentMonth(currentMonthNumber))
      dispatch(getAmountDays())

      dispatch<any>(fetchDrivers())
      dispatch<any>(fetchCarpool())
   }, [])

   return (
      <Container>
         <Content>
            <Calendar />
         </Content>
         <DriversDash>
            <AddNewDriver />
            <DriversTable />
            <ValueForDay />
         </DriversDash>
      </Container>
   )
}

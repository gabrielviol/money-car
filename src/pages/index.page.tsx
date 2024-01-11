import { useDispatch } from "react-redux"
import { useEffect, useRef, useState } from "react"
import { v4 as uuidv4 } from 'uuid'
import { AxiosError } from "axios"
import dayjs from "dayjs"

import { api } from "@/lib/axios"
import { Calendar } from "@/components/Calendar"
import { DriversTable } from "@/components/DriversTable"
import { ValueForDay } from "@/components/ValueForDay"

import { fetchCarpool, fetchDrivers } from "@/store/fetchActions"

import { addNewDriver, getAmountDays, setCurrentMonth } from "@/store/reducers/driverReducer"

import {
   Button,
   Container,
   Content,
   ContentAddNewDriver,
   DriversDash,
   Input,
   Wrapper
} from "./style"
import { AddNewDriver } from "@/components/AddNewDriver"

export default function Home() {   
   const dispatch = useDispatch()

   useEffect(() => {
      const currentDate = dayjs().set('date', 1)
      const currentMonthNumber = currentDate.format('MM')

      dispatch(setCurrentMonth(currentMonthNumber))
      dispatch(getAmountDays())

      dispatch(fetchDrivers())
      dispatch(fetchCarpool())
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

import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { Dispatch } from "redux"

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


const fetchData = async (dispatch: Dispatch) => {
   const currentDate = dayjs().set('date', 1)
   const currentMonthNumber = currentDate.format('MM')
 
   dispatch(setCurrentMonth(currentMonthNumber))
   dispatch(getAmountDays())
 
   dispatch(fetchDrivers())
   dispatch(fetchCarpool())
 }

export default function Home() {   
   const dispatch = useDispatch()
      
      useEffect(() => {
         fetchData(dispatch)
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

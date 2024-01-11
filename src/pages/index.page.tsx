import { useDispatch, useSelector } from "react-redux"
import { useEffect, useRef, useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import { AxiosError } from "axios";
import dayjs from "dayjs";

import { api } from "@/lib/axios";
import { Calendar } from "@/components/Calendar"
import { DriversTable } from "@/components/DriversTable";

import { fetchCarpool, fetchDrivers } from "@/store/fetchActions";

import { 
   CarpoolState, 
   addNewDriver, 
   getAmountDays, 
   setCurrentMonth, 
   setValueForDay 
} from "@/store/reducers/driverReducer"

import {
   Button,
   Container,
   Content,
   ContentAddNewDriver,
   ContentValueForDay,
   DriversDash,
   Input,
   Value,
   Wrapper
} from "./style"

export default function Home() {

   
   const { valueForDay } = useSelector(CarpoolState)
   const dispatch = useDispatch()

   useEffect(() => {
      const currentDate = dayjs().set('date', 1)
      const currentMonthNumber = currentDate.format('MM')

      dispatch(setCurrentMonth(currentMonthNumber))
      dispatch(getAmountDays())

      dispatch(fetchDrivers())
      dispatch(fetchCarpool())
   }, [])

   

   const ChangeValueForDay = () => {
      const [isActive, setIsActive] = useState(false)
      const [newValue, setNewValue] = useState('')

      const changeValue = () => {
         const newValueFloat = parseFloat(newValue)
         if (!isNaN(newValueFloat) && newValueFloat > 0) {
            dispatch(setValueForDay(newValueFloat))
            dispatch(getAmountDays())
            setNewValue('')
            setIsActive(false)
         } else {
            setNewValue('')
            setIsActive(false)
         }
      }

      return (
         <ContentValueForDay>
            <span>Valor Diário</span>
            <Wrapper>
               <Value>R${valueForDay}</Value>
               {isActive ? (
                  <>
                     <Input
                        type="text"
                        value={newValue}
                        onChange={(e) => setNewValue(e.target.value)}
                     />
                     <Button onClick={changeValue}>
                        Salvar
                     </Button>
                  </>
               ) :
                  (
                     <Button onClick={() => setIsActive(true)}>
                        Alterar
                     </Button>
                  )}
            </Wrapper>
         </ContentValueForDay>
      )
   }

   const AddNewDriver = () => {
      const [isActive, setIsActive] = useState(false)
      const [newDriver, setNewDriver] = useState('')
      const inputRef = useRef<HTMLInputElement>(null)


      useEffect(() => {
         if (isActive && inputRef.current) {
           inputRef.current.focus()
         }
        }, [isActive])

      const handleAddNewDriver = async (e: React.FormEvent<HTMLFormElement>) => {
         e.preventDefault()

         if (newDriver.trim() === '' || newDriver.startsWith(' ')) {
            console.log('deu erro')
            setNewDriver('')
            setIsActive(false)
         } else {
            const randomId = uuidv4()
            try {
               await api.post('/postDriver', {
                  name: newDriver,
                  id: randomId
               })
               dispatch(addNewDriver({ name: newDriver, id: randomId }))
            } catch (err) {
               if (err instanceof AxiosError && err.response?.data?.message) {
                  alert(err.response.data.message)
                  return
               }
               console.log(err)
            }

            setNewDriver('')
            setIsActive(false)
         }
      }

      return (
         <ContentAddNewDriver>
            <Wrapper>
               {isActive ? (
                  <>
                     <form onSubmit={(e) => handleAddNewDriver(e)}>
                        <Input
                           type="text"
                           width={500}
                           value={newDriver}
                           onChange={(e) => setNewDriver(e.target.value)}
                        />
                        <Button type="submit">Adicionar</Button>
                     </form>
                  </>
               ) :
                  (
                     <Button onClick={() => setIsActive(true)}>
                        Novo Motorista
                     </Button>
                  )}
            </Wrapper>
         </ContentAddNewDriver>
      )
   }

   return (
      <Container>
         <Content>
            <Calendar />
         </Content>
         <DriversDash>
            <AddNewDriver />
            <DriversTable />
            <ChangeValueForDay />
         </DriversDash>
      </Container>
   )
}

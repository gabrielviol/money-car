import { useDispatch, useSelector } from 'react-redux'
import * as Popover from '@radix-ui/react-popover'
import { AxiosError } from 'axios'
import dayjs from 'dayjs'
import { useCallback, useEffect, useState } from 'react'
import { api } from '@/lib/axios'
import { setCarpoolDay, setCarpoolState, setDriversState } from '@/store/reducers/driverReducer'

import { Text } from '@ignite-ui/react'
import {
   CalendarDay,
   Label,
   PopoverDay,
   RadioGroupIndicator,
   RadioGroupItem,
   RadioGroupRoot
} from './styles'

export function PopOver({ date, disabled }: any) {
   const dispatch = useDispatch()
   const carpool = useSelector(setCarpoolState)
   const drivers = useSelector(setDriversState)
   const dayInMonth = dayjs(date).format('YYYY-MM-DD')   
   const [driverId, setDriverId] = useState('default')
   const [driverSelected, setDriverSelected] = useState(0);

   console.log(driverSelected)

   useEffect(() => {
      const index = drivers.findIndex((driver) => driverId === driver.id);
      setDriverSelected(index);
   }, [driverId]);

   useEffect(() => {
      const carpoolItem = carpool.find((item) => item.day === dayInMonth)
      setDriverId(carpoolItem ? carpoolItem.idDriver : 'default')
   }, [carpool])

   const handleSetDriver = async (id: any) => {
      try {
         const props = { id, dayInMonth }
         await api.post('/postCarpool', props)
         setDriverId(id)
         dispatch(setCarpoolDay(props))
      } catch (err) {
         if (err instanceof AxiosError && err.response?.data?.message) {
            alert(err.response.data.message)
            return
         }
         console.log(err)
      }
   }

   const RadioGroupDemo = ({ value }: any) => {
      return (
         <div style={{ display: 'flex', alignItems: 'center' }}>
            <RadioGroupItem value={value.id} id={value.id} >
               <RadioGroupIndicator />
            </RadioGroupItem>
            <Label>
               {value.name}
            </Label>
         </div>
      )
   }

   const CalendarInDay = useCallback(() => {
      return (
      <CalendarDay 
         selectedDriver={driverSelected} 
         disabled={disabled}
      >
         {date.get('date')}
      </CalendarDay>)
   }, [driverSelected])

   return (
      <Popover.Root>
         <CalendarInDay />
         <Popover.Portal>
            <PopoverDay >
               <form>
                  <RadioGroupRoot
                     aria-label="View density"
                     value={driverId}
                     defaultValue={driverId}
                     onValueChange={(props) => handleSetDriver(props)}
                  >
                     <Text>Quem Levou?</Text>
                     {drivers.map(driver => {
                        return <RadioGroupDemo key={driver.id} value={driver} />
                     })}
                  </RadioGroupRoot>
               </form>
               <Popover.Arrow />
            </PopoverDay>
         </Popover.Portal>
      </Popover.Root>
   )
}
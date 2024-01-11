import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { removeDriver, setDriversState } from "@/store/reducers/driverReducer";

import { Square, Trash, X } from "@phosphor-icons/react"

import { api } from "@/lib/axios";
import { AxiosError } from "axios";

import * as Popover from '@radix-ui/react-popover';

import {
   Caption,
   PopoverClose,
   PopoverContent,
   PopoverTrigger,
   Table,
   TableBody,
   TableCell,
   TableHead,
   TableHeader,
   TableRow
} from "./styles"

export const DriversTable = () => {
   const [highlightedDriverId, setHighlightedDriverId] = useState(null)
   const [showDeleteBox, setShowDeleteBox] = useState(false)
   const [isOpen, setIsOpen] = useState(true);

   const dispatch = useDispatch()

   const drivers = useSelector(setDriversState)

   const handleOpen = () => {
      setIsOpen(true);
   };

   const handleClose = () => {
      return null
   };

   const handleMouseEnter = (driver: any) => {
      setHighlightedDriverId(driver.id)
      setShowDeleteBox(true)
   }

   const handleMouseLeave = () => {
      setHighlightedDriverId(null)
      setShowDeleteBox(false)
   }

   const handleRemoveDriver = async (driverId: string) => {
      try {
         await api.delete('/deleteDriver', {
            data: { id: driverId }
         })
         dispatch(removeDriver(driverId))
      } catch (err) {
         if (err instanceof AxiosError && err.response?.data?.message) {
            alert(err.response.data.message)
            return
         }
         console.log(err)
      }
   }

   return (
      <Table>
         <Caption>Motoristas</Caption>
         <TableHead>
            <tr>
               <TableHeader>Motorista</TableHeader>
               <TableHeader>Dias</TableHeader>
               <TableHeader>Total</TableHeader>
               <TableHeader></TableHeader>
            </tr>
         </TableHead>
         <TableBody>
            {drivers.filter(driver => driver.id !== "default").map((driver, i) => {
               return (
                  <TableRow
                     key={driver.id}
                     onMouseEnter={() => handleMouseEnter(driver)}
                     onMouseLeave={handleMouseLeave}
                  >
                     <TableCell selectedDriver={i + 1} >
                        <div>
                           <Square size={18} weight="fill" />{driver.name}
                        </div>
                     </TableCell>
                     <TableCell>{driver.days}</TableCell>
                     <TableCell>R$ {driver.total}</TableCell>
                     <TableCell>
                        <Popover.Root modal={isOpen}>
                           <PopoverTrigger onClick={handleOpen}>
                              {
                                 driver.id === highlightedDriverId && showDeleteBox ?
                                    <span >
                                       <Trash size={24} weight="bold" />
                                    </span> :
                                    null
                              }
                           </PopoverTrigger>
                           <Popover.Portal>
                              <PopoverContent >
                                 <div>
                                    <span>Remover {driver.name}?</span>
                                    <div>
                                       <button onClick={() => handleRemoveDriver(driver.id)}>Sim</button>
                                       <button onClick={() => { return null }}>Não</button>
                                    </div>
                                 </div>
                                 <PopoverClose>
                                    <X size={32} />
                                 </PopoverClose>
                                 <Popover.Arrow />
                              </PopoverContent>
                           </Popover.Portal>
                        </Popover.Root>
                     </TableCell>
                  </TableRow>
               )
            })}

         </TableBody>
      </Table>
   )
}
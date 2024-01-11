import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { CarpoolState, getAmountDays, setValueForDay } from "@/store/reducers/driverReducer"

import {
   Button,
   ContentValueForDay,
   Input,
   Value,
   Wrapper
} from "./styles"

export const ValueForDay = () => {
   const [isActive, setIsActive] = useState(false)
   const [newValue, setNewValue] = useState('')
   
   const { valueForDay } = useSelector(CarpoolState)
   const dispatch = useDispatch()

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
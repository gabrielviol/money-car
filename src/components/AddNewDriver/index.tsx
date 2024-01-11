import { useEffect, useRef, useState } from "react"

import {
   Button,
   ContentAddNewDriver,
   Input,
   Wrapper
} from "./styles"

export const AddNewDriver = () => {
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
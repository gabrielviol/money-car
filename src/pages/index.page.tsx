import { Calendar } from "@/components/Calendar"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { CarpoolState, addNewDriver, getAmountDays, removeDriver, setDriversState, setValueForDay } from "@/store/reducers/driverReducer"
import { v4 as uuidv4 } from 'uuid';
import { Trash, X } from "@phosphor-icons/react"
import * as Popover from '@radix-ui/react-popover';
import {
  Button,
  Caption,
  Container,
  Content,
  ContentValueForDay,
  DriversDash,
  Input,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Value,
  Wrapper
} from "./style"

export default function Home() {
  const drivers = useSelector(setDriversState)
  const { valueForDay } = useSelector(CarpoolState)
  const dispatch = useDispatch()

  const DriversTable = () => {
    const [highlightedDriverId, setHighlightedDriverId] = useState(null)
    const [showDeleteBox, setShowDeleteBox] = useState(false)

    const handleMouseEnter = (driver: any) => {
      setHighlightedDriverId(driver.id)
      setShowDeleteBox(true)
    }

    const handleMouseLeave = () => {
      setHighlightedDriverId(null)
      setShowDeleteBox(false)
    }

    const handleRemoveDriver = (driver: any) => {
      dispatch(removeDriver(driver))
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
          {drivers.map((driver) => {
            return (
              <TableRow
                key={driver.id}
                onMouseEnter={() => handleMouseEnter(driver)}
                onMouseLeave={handleMouseLeave}
              >
                <TableCell>{driver.name}</TableCell>
                <TableCell>{driver.days}</TableCell>
                <TableCell>R$ {driver.total}</TableCell>
                <TableCell>
                  <Popover.Root>
                    <PopoverTrigger>
                      {
                        driver.id === highlightedDriverId && showDeleteBox ?
                          <button>
                            <Trash size={32} weight="bold" />
                          </button> :
                          null
                      }
                    </PopoverTrigger>
                    <Popover.Portal>
                      <PopoverContent >
                        <div>
                          <span>Tem certeza?</span>
                          <div>
                            <button onClick={() => handleRemoveDriver(driver.id)}>Sim</button>
                            <button onClick={() => { }}>Não</button>
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

    const handleAddNewDriver = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      if (newDriver.trim() === '' || newDriver.startsWith(' ')) {
        console.log('deu erro')
        setNewDriver('')
        setIsActive(false)
      } else {
        const randomId = uuidv4()
        dispatch(addNewDriver({ name: newDriver, id: randomId }))
        console.log(drivers)
        setNewDriver('')
        setIsActive(false)
      }
    }

    return (
      <ContentValueForDay>
        <Wrapper>
          {isActive ? (
            <>
              <form onSubmit={(e) => handleAddNewDriver(e)}>
                <Input
                  type="text"
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
      </ContentValueForDay>
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

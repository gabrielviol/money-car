import { Calendar } from "@/components/Calendar";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDriversState } from "@/store/reducers/driverReducer";

import {
  Button,
  Caption,
  Container,
  Content,
  ContentValueForDay,
  DriversDash,
  Input,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Value,
  Wrapper
} from "./style";

export default function Home() {
  const drivers = useSelector(setDriversState)

  const DriversTable = () => {
    return (
      <Table>
        <Caption>Motoristas</Caption>
        <TableHead>
          <tr>
            <TableHeader>Motorista</TableHeader>
            <TableHeader>Dias</TableHeader>
            <TableHeader>Total</TableHeader>
          </tr>
        </TableHead>
        <TableBody>
          {drivers.map((driver) => {
            return (
              <TableRow key={driver.id}>
                <TableCell>{driver.name}</TableCell>
                <TableCell>{driver.days}</TableCell>
                <TableCell>R$ 500,00</TableCell>
              </TableRow>
            )
          })}

        </TableBody>
      </Table>
    );
  }

  const ValueForDay = () => {
    const [value, setValue] = useState(10)
    const [isActive, setIsActive] = useState(false)
    const [newValue, setNewValue] = useState('')

    const alterarValor = () => {
      const newValueFloat = parseFloat(newValue);
      if (!isNaN(newValueFloat) && newValueFloat > 0) {
        setValue(newValueFloat);
        setNewValue('')
        setIsActive(false)
      }
    }

    return (
      <ContentValueForDay>
        <span>Valor Diário</span>
        <Wrapper>
          <Value>{value}R$</Value>
          {isActive ? (
            <>
              <Input
                type="text"
                value={newValue}
                onChange={(e) => setNewValue(e.target.value)}
              />
              <Button onClick={alterarValor}>
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
    );
  }

  return (
    <Container>
      <Content>
        <Calendar />
      </Content>
      <DriversDash>
        <DriversTable />
        <ValueForDay />
      </DriversDash>

    </Container>
  )
}

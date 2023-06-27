import { Calendar } from "@/components/Calendar";
import { Container, Content, TableUsers } from "./style";
import { Text } from "@ignite-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getAmountDays, setCarpoolState, setDriversState } from "@/store/reducers/driverReducer";
import { useEffect } from "react";

export default function Home() {
  const dispatch = useDispatch()
  const drivers = useSelector(setDriversState)
  const carpool = useSelector(setCarpoolState)

  useEffect(() => {
    dispatch(getAmountDays())
  }, [carpool])

  return (
    <Container>
      <Content>
        <Calendar />
      </Content>
      <div>
        <TableUsers>
          <tbody>
            {drivers.map((driver) => {
              return (
                <tr key={driver.id}>
                  <td><Text>{driver.name}</Text></td>
                  <td><Text>Total de Dias: {driver.days} </Text></td>
                </tr>
              )
            })}
          </tbody>
        </TableUsers>
      </div>
    </Container>
  )
}

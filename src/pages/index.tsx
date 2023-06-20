import { Calendar } from "@/components/Calendar";
import { Container, Content, TableUsers } from "./style";
import { Text } from "@ignite-ui/react";
import { useSelector } from "react-redux";
import { setDriversState } from "@/store/reducers/driverReducer";

export default function Home() {
  const drivers = useSelector(setDriversState)
  console.log(drivers)
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

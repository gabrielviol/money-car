import { Calendar } from "@/components/Calendar";
import { Container, Content, TableUsers } from "./style";
import { Text } from "@ignite-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getAmountDays, setCarpoolState, setDriversState } from "@/store/reducers/driverReducer";
import { useEffect } from "react";

export default function Home() {
  const dispatch = useDispatch()
  const drivers = useSelector(setDriversState)


  return (
    <Container>
      <Content>
        <Calendar />
      </Content>
      <div>
        <TableUsers>
          <tr>
            <th>
            </th>
            <th>
              <span>Dias</span>
            </th>
            <th>
              <span>Total</span>
            </th>
          </tr>
          <tbody>
            {drivers.map((driver) => {
              return (
                <tr key={driver.id}>
                  <td><Text>{driver.name}</Text></td>
                  <td><Text>{driver.days} </Text></td>
                  <td><Text>10R$</Text></td>
                </tr>
              )
            })}
          </tbody>
        </TableUsers>
        <div>
          <label htmlFor="">Valor diario</label>
          <input type="text" />
          <button>Salvar</button>
        </div>
      </div>
    </Container>
  )
}

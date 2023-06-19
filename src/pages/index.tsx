import { Calendar } from "@/components/Calendar";
import { Container, Content, TableUsers } from "./style";
import { Text } from "@ignite-ui/react";
import { connect, useSelector } from "react-redux";
import { setUserState } from "@/store/reducers/usersReducer";

export default function Home (){
  const { users } = useSelector(setUserState)
  return (
    <Container>
      <Content>
        <Calendar />
      </Content>
      <div>
        <TableUsers>
          <tbody>
            {users.map((user) => {
              return (
                <tr key={user.id}>
                  <td><Text>{user.name}</Text></td>
                  <td><Text>Total: {user.total} </Text></td>
                </tr>
              )
            })}
          </tbody>
        </TableUsers>
      </div>
    </Container>
  )
}

import { Calendar } from "@/components/Calendar";
import { Container, Content, TableUsers } from "./style";
import { Text } from "@ignite-ui/react";
import { connect } from "react-redux";
import { RootState, User } from "@/store/reducers";

interface HomeProps {
  users: User[]
}

const Home = ({ users }: HomeProps) => {
  console.log(users)
  return (
    <Container>
      <Content>
        <Calendar />
      </Content>
      <div>
        <TableUsers>
          <tbody>
            {users.map(user => {
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

const mapStateToProps = (state: RootState) => ({
  users: state.users,
});

export default connect(mapStateToProps)(Home);
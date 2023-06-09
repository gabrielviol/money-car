import { Calendar } from "@/components/Calendar";
import { Container, Content } from "./style";
import { Checkbox, Text } from "@ignite-ui/react";

export default function Home() {
  return (
    <Container>
      <Content>
        <Calendar />
      </Content>
      <div>
        <Checkbox />
        <Text>Gabriel</Text>
        <Text>Dia(s): 5</Text>
        <Text>Total: R$ 20 </Text>
      </div>
    </Container>
  )
}
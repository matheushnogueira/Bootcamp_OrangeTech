// Components
import { Header } from "../../components/Header"
import { Card } from "../../components/Card"
import { UserInfo } from "../../components/userInfo"
// Styles
import { 
   Container, 
   Column, 
   Title, 
   TitleHighlight
} from './styles'

const Feed = () => {
return (
<>
   <Header autenticado={true}/>
   <Container>
      <Column flex={3}>
         <Title>Feed</Title>
         <Card/>
         <Card/>
         <Card/>
      </Column >
      <Column flex={1}>
         <TitleHighlight># Ranking 3 TOP DA SEMANA</TitleHighlight>
         <UserInfo percentual={80} name="Anônimo" />
         <UserInfo percentual={27} name="Anônimo" />
         <UserInfo percentual={89} name="Anônimo" />
      </Column>
   </Container>
</>
)}
export { Feed }

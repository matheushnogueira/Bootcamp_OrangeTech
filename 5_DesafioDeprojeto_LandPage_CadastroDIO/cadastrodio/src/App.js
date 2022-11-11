// Components
import { Button } from './components/Button';
import { Header } from './components/Header';
import { Input } from './components/Input';

// Styles, icons
import { MdEmail, MdLock } from 'react-icons/md'
import { FaUser } from 'react-icons/fa'
import { 
   Container, 
   Title, 
   Column, 
   TitleCadastro, 
   SubtitleCadastro, 
   EsqueciText, 
   CriarText,
   Row,   
   Wrapper 
} from './styles';

function App() {
   
  return (
   <>
   <Header />
   <Container>
      <Column>
         <Title>A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
         </Title>
      </Column>
      <Column>
         <Wrapper>
            <TitleCadastro>Comece agora grátis</TitleCadastro>
            <SubtitleCadastro>Crie sua conta e make the change._</SubtitleCadastro>
            <form>
               <Input 
                  placeholder="Nome completo" 
                  leftIcon={<FaUser />} 
                  name="Nome"  
               />
               <Input 
                  placeholder="E-mail" 
                  leftIcon={<MdEmail />} 
                  name="email"  
               />
               <Input 
                  type="password" 
                  placeholder="Senha" 
                  leftIcon={<MdLock />}  
                  name="senha" 
               />
               <Button 
                  title="Criar minha conta" 
                  variant="secondary" 
                  type="submit"
               />
            </form>
            <Column>
               <EsqueciText>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</EsqueciText>
               <Row>
                  Já tenho conta.<CriarText>Fazer Login</CriarText>
               </Row>
            </Column>
         </Wrapper>
      </Column>
   </Container>
</>
  );
}

export default App;

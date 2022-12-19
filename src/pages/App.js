import { Container, Title, Column, TitleLogin, SubtitleLogin, LoginText, Row, Wrapper } from './styles';
import { MdEmail, MdLock, MdPerson } from 'react-icons/md';
import { GlobalStyle } from '../styles/global';
import { Button } from '../components/Button';
import { Header } from '../components/Header';
import { Input } from '../components/Input';
import { useForm } from "react-hook-form";

const App = () => {

  const { control, handleSubmit, formState: { errors } } = useForm({
    reValidateMode: 'onChange',
    mode: 'onChange',
  });

  const onSubmit = async ({ nome, email, senha }) => {
    console.log(nome, email, senha);
   
    if (nome !== undefined & email !== undefined & senha !== undefined) {
      alert('Usuário cadastrado!');
    } else {
      alert('Insira os dados corretamente!');
    }  
  };

  return (<>
    <GlobalStyle />
    <Header />
    <Container>
      <Column>
        <Title>A plataforma para você aprender com experts, dominar as principais tecnologias
          e entrar mais rápido nas empresas mais desejadas.</Title>
      </Column>
      <Column>
        <Wrapper>
          <TitleLogin>Comece agora grátis</TitleLogin>
          <SubtitleLogin>Crie sua conta e make the change._</SubtitleLogin>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input placeholder="Nome Completo" leftIcon={<MdPerson />} name="nome" control={control} />
            {errors.name && <span>Nome é obrigatório</span>}
            <Input placeholder="E-mail" leftIcon={<MdEmail />} name="email" control={control} />
            {errors.email && <span>E-mail é obrigatório</span>}
            <Input type="password" placeholder="Senha" leftIcon={<MdLock />} name="senha" control={control} />
            {errors.senha && <span>Senha é obrigatório</span>}
            <Button title="Criar minha conta" variant="secondary" type="submit" />
          </form>
          <Column>
            <SubtitleLogin>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade
              e os Termos de Uso da DIO.</SubtitleLogin>
          </Column>
          <Row>
            <SubtitleLogin>Já tenho conta. </SubtitleLogin>
            <LoginText>Fazer login</LoginText>
          </Row>
        </Wrapper>
      </Column>
    </Container>
  </>)
}

export default App;
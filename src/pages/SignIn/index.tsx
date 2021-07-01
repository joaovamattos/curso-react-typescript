import logo from '../../assets/logo.png';

import { Container, Logo, Input, Button } from './styles';

export function SignIn() {
  return (
    <Container>
      <Logo src={logo} alt="CL Logo" />
      <Input type="text" defaultValue="test@email.com" />
      <Input type="password" defaultValue="12345678" />
      <Button onClick={() => {}}>Entrar</Button>
    </Container>
  );
}
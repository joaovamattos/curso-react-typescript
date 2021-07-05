import logo from "../../assets/logo.png";

import { Container, Logo } from "./styles";

export function Dashboard() {
  return (
    <Container>
      <Logo src={logo} alt="CL Logo" />
    </Container>
  );
}

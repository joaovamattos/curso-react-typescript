import { ThemeProvider } from "styled-components";
import GlobalStyes from "./styles/global";
import theme from "./styles/theme";

import { SignIn } from "./pages/SignIn";

function App() {
  return (
    <ThemeProvider theme={theme.default}>
      <GlobalStyes />
      <SignIn />
    </ThemeProvider>
  );
}

export default App;

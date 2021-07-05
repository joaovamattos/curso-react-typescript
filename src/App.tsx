import { ThemeProvider } from "styled-components";
import { Router } from "react-router-dom";

import history from "./services/history";
import Routes from "./routes";
import theme from "./styles/theme";
import GlobalStyes from "./styles/global";
import ContextProvider from "./contexts";

function App() {
  return (
    <ThemeProvider theme={theme.default}>
      <ContextProvider>
        <Router history={history}>
          <GlobalStyes />
          <Routes />
        </Router>
      </ContextProvider>
    </ThemeProvider>
  );
}

export default App;

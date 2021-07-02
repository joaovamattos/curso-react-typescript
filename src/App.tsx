import { ThemeProvider } from "styled-components";
import { Router } from "react-router-dom";

import history from "./services/history";
import Routes from "./routes";
import theme from "./styles/theme";
import GlobalStyes from "./styles/global";

function App() {
  return (
    <ThemeProvider theme={theme.default}>
      <Router history={history}>
        <GlobalStyes />
        <Routes />
      </Router>
    </ThemeProvider>
  );
}

export default App;

import { render } from "react-dom";
import { ThemeProvider } from "styled-components";

import Router from "@/presentation/router";

import theme from "@/presentation/shared/style/theme";
import GlobalStyle from "@/presentation/shared/style/global";

const Main = () => {
  return (
    <ThemeProvider theme={theme.default}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
};

render(<Main />, document.getElementById("app"));

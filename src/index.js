import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyle } from "./Global.styled";
import { ThemeProvider } from "styled-components";
import { theme } from "./constants";
import App from "./components/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

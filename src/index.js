import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import App from "./App";
import * as serviceWorker from "./serviceWorker";

import resume from "./store/resume";
import navbar from "./store/navbar";
import hint from "./store/hint";
import dialog from "./store/dialog";

import { Provider } from "mobx-react";
import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&family=Noto+Sans+SC:wght@100;300;400;500;700;900&display=swap');
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#bbdefb",
      main: "#2196f3",
      dark: "#1976d2",
      contrastText: "#fff"
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000"
    },
  },
  typography: {
    useNextVariants: true,
  },
});

ReactDOM.render(
  <Provider resume={resume} navbar={navbar} hint={hint} dialog={dialog}>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

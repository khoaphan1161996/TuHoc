import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core/styles";
import styles from "./styles";
import theme from "../commons/Theme";
import { Provider } from "react-redux";
import configureStore from "../redux/configureStore";

import Taskboard from "../Taskboard";

const store = configureStore()

function App(props) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Taskboard />
      </ThemeProvider>
    </Provider>
  );
}

export default withStyles(styles)(App);

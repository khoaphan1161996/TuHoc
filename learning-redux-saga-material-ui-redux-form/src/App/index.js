import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles'
import styles from './styles'
import theme  from '../commons/Theme';

import Taskboard from '../Taskboard';


function App(props) {
  
  return (
    <ThemeProvider theme={theme}>
        <Taskboard />
    </ThemeProvider>
  );
}

export default withStyles(styles)(App);

import { withStyles } from '@material-ui/core/styles';
import styles from './styles'
import Button from '@material-ui/core/Button';


function App(props) {
  const {classes} = props;
  
  return (
    <div>
        <h1>Redux Saga</h1>
        <Button variant="contained" color="primary">
          Primary
        </Button>
      <div className={classes.box}>
        <div className={classes.shape}>React</div>
        <div className={classes.shape}>Angular</div>
        <div className={classes.shape}>Vue</div>
      </div>
    </div>
  );
}

export default withStyles(styles)(App);

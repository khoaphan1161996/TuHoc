import { withStyles } from '@material-ui/core/styles';
import styles from './styles'

import { STATUSES } from '../constants';
import  Button  from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const listTask = [
  {
    id:1,
    title:'Read book',
    description: 'Read material ui book',
    status: 0
  },
  {
    id:1,
    title:'Play football',
    description: 'With myy friend',
    status: 2
  },
  {
    id:1,
    title:'Play game',
    description: '',
    status: 1
  },
]

function Taskboard(props) {
  const {classes} = props;

  const renderBoard = () => {
    let xhtml = null 
    xhtml = (
      <Grid container spacing={2}>
        {STATUSES.map((status) => {
          const taskFiltered = listTask.filter(task => task.status === status.value)
          return (
          <Grid item md={4} xs={12} key={status.value}>
            <Box mt={2} mb={2}><div className={classes.status}>{status.label}</div></Box>
            
            <div className={classes.wrapperListTask}>
              {taskFiltered.map((task) => {
                return (
                  <Card key={task.id} className={classes.card}>
                      <CardContent>
                        <Grid container justify='space-between'>
                          <Grid item md={8}>
                            <Typography component="h2">
                              {task.title}
                            </Typography>
                          </Grid>
                          <Grid item md={4}>
                            {status.label}
                          </Grid>
                        </Grid>
                      </CardContent>
                      <CardActions>
                        <Button size='small'></Button>
                      </CardActions>
                  </Card>
                )
              })}
            </div>
            </Grid>
          )
        }
        )}
      </Grid>
    )
    return xhtml
  }
  
  return (
      <div className={classes.taskboard}>
          <Button variant='contained' color='primary' className={classes.button}>
            <AddIcon />  THÊM MỚI CÔNG VIỆC
          </Button>
          {renderBoard()}
      </div>
  );
}

export default withStyles(styles)(Taskboard);

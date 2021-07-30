import { withStyles } from '@material-ui/core/styles';
import styles from './styles'

import { STATUSES } from '../constants';
import  Button  from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';

import TaskList from '../components/TaskList';

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
          return <TaskList status={status} taskFiltered={taskFiltered} key={status.value}/>
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

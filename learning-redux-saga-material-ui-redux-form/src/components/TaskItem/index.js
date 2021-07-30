import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';

import styles from './styles'

function TaskItem(props) {
    const {classes,status,task} = props;

    return (
        <Card key={task.id} className={classes.card}>
            <CardContent>
              <Grid container justifyContent='space-between'>
                <Grid item md={8}>
                  <Typography component="h2">
                    {task.title}
                  </Typography>
                </Grid>
                <Grid item md={4}>
                  {status.label}
                </Grid>
              </Grid>
              <p>{task.description}</p>
            </CardContent>
            <CardActions className={classes.cardAction}>
            <Fab size='small' color="primary" aria-label="edit" className={classes.fab}>
                <Icon fontSize="small">
                    edit_icon
                </Icon>
            </Fab>
            <Fab size='small' color="primary" aria-label="delete" className={classes.fab}>
                <Icon fontSize="small">
                    delete_icon
                </Icon>
            </Fab>
            </CardActions>
        </Card>
      )
}

export default withStyles(styles)(TaskItem)
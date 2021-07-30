import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

import { STATUSES } from "../constants";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import Grid from "@material-ui/core/Grid";

import TaskList from "../components/TaskList";
import TaskForm from "../components/TastForm";

const listTask = [
  {
    id: 1,
    title: "Read book",
    description: "Read material ui book",
    status: 0,
  },
  {
    id: 1,
    title: "Play football",
    description: "With my friend",
    status: 2,
  },
  {
    id: 1,
    title: "Play game",
    description: "",
    status: 1,
  },
];

function Taskboard(props) {
  const { classes } = props;

  const [open, setOpen] = useState(false);

  const handleClose = (e) => {
    setOpen(false);
  };

  const openForm = (e) => {
    setOpen(true);
  };

  const renderBoard = () => {
    let xhtml = null;
    xhtml = (
      <Grid container spacing={2}>
        {STATUSES.map((status) => {
          const taskFiltered = listTask.filter(
            (task) => task.status === status.value
          );
          return (
            <TaskList
              status={status}
              taskFiltered={taskFiltered}
              key={status.value}
            />
          );
        })}
      </Grid>
    );
    return xhtml;
  };

  const renderForm = () => {
    let xhtml = null;
    xhtml = <TaskForm open={open} onClose={handleClose} />;
    return xhtml;
  };

  return (
    <div className={classes.taskboard}>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={openForm}
      >
        <AddIcon /> THÊM MỚI CÔNG VIỆC
      </Button>
      {renderBoard()}
      {renderForm()}
    </div>
  );
}

export default withStyles(styles)(Taskboard);

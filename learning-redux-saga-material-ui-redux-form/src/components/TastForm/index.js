import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

function TaskForm(props) {
  const { open,onClose } = props;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Thêm mới công việc</DialogTitle>
      <DialogContent>
        <TextField id="standard-basic" label="Standard" />

        <TextField
          id="standard-multiline-flexible"
          label="Multiline"
          multiline
          maxRows={4}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={onClose} color="primary">
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default withStyles(styles)(TaskForm);

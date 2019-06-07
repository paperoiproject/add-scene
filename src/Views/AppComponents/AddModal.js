import React from 'react';
import { withStyles } from "@material-ui/core/styles";

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import MenuItem from '@material-ui/core/MenuItem';

const styles = theme => ({
  root: {
    margin: 0,
    width: "90vw",
    maxWidth: "700px",
    overflow: "auto",
    backgroundColor: theme.palette.background.paper
  },
  textField: {
    width: "30vw",
    maxWidth: "301px",
  },
  textField_left: {
    marginLeft: "7vw",
    width: "40vw",
    maxWidth: "301px",
  },
});

const data = [
  {
    value: 0,
    label: "固定",
  },
  {
    value: 1,
    label: "重要",
  },
  {
    value: 2,
    label: '変動',
  },
];


const AddModal = (props) => {
  const { classes } = props;

  return (
    <div>
      <Dialog
        classes={{paper: classes.root}}
        open={props.modal_open}
        onClose={() => props.modalClose()} aria-labelledby="form-dialog-title" >
        <DialogTitle id="form-dialog-title">{props.modal_title}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="貯金目標"
            placeholder="数字を入力してください"
            fullWidth
            helperText
            error={false}
          />
        </DialogContent>
        <DialogContent>
          <TextField
            className={classes.textField}
            select
            label="Select"
            autoFocus
            margin="dense"
            id="name"
            label="貯金目標"
            helperText >
            {data.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="サイズ"
            placeholder="数字のみ"
            className={classes.textField_left}
            helperText
            type="number"
            error={false}
          />
        </DialogContent>
        <DialogActions>
          <Button color="primary">
            Cancel
          </Button>
          <Button color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );

}

export default withStyles(styles)(AddModal);
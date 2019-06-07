import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit,
    width: "60vw",
  },
});

const EnterPaper__TextBox = (props) => {
  const { classes } = props;
  return (
    <div>
      <TextField
        className={classes.margin}
        id="input-with-icon-textfield"
        label="TextField"
        onChange = {
          e => {props.onChange(e)}
        }
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              {props.type}:
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
}

export default withStyles(styles)(EnterPaper__TextBox);

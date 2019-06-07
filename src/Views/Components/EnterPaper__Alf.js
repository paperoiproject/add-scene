import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

const EnterPaper__Alf = (props) => {
  const { classes } = props;
  return (
    <div>
      <Button className={classes.button} onClick={e => {props.onClick()}}>{props.text}</Button>
    </div>
  );
}

export default withStyles(styles)(EnterPaper__Alf);

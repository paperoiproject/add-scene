import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    width: "30vw",
  },
  input: {
    display: 'none',
  },
});

const EnterPaper__Button = (props) => {
  const { classes } = props;
  return (
    <div>
      <Button variant="outlined" className={classes.button} onClick={() => props.addBehav()}>
        シーンの追加
      </Button>
    </div>
  );
}

export default withStyles(styles)(EnterPaper__Button);
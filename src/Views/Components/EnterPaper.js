import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import EnterPaper__TextBox from './EnterPaper__TextBox.js';
import EnterPaper__Button from './EnterPaper__Button.js';
import EnterPaper__Alf from './EnterPaper__Alf.js';

const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "3vh",
    width: "70vw",
    height: "40vh",
  },
});

const EnterPaper = (props) => {
  const { classes } = props;
  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <EnterPaper__TextBox
          onChange={e => {props.changeAddText(e)}}
          type={props.typeValue} />
        <EnterPaper__Button
          addBehav={() => {props.addBehav()}}/>
        <div className = "EnterPaper__Alfs">
          <EnterPaper__Alf text = "A:adafd" onClick={() => {props.changeSymbol('A')}} />
          <EnterPaper__Alf text = "B:adafd" onClick={() => {props.changeSymbol('B')}} />
          <EnterPaper__Alf text = "C:adafd" onClick={() => {props.changeSymbol('C')}} />
          <EnterPaper__Alf text = "D:adafd" onClick={() => {props.changeSymbol('D')}} />
          <EnterPaper__Alf text = "E:adafd" onClick={() => {props.changeSymbol('E')}} />
          <EnterPaper__Alf text = "F:adafd" onClick={() => {props.changeSymbol('F')}} />
          <EnterPaper__Alf text = "G:adafd" onClick={() => {props.changeSymbol('G')}} />
          <EnterPaper__Alf text = "H:adafd" onClick={() => {props.changeSymbol('H')}} />
          <EnterPaper__Alf text = " :動作なし" onClick={() => {props.changeSymbol(' ')}} />
        </div>
        <Typography variant="h5" component="h3">
          This is a sheet of paper.
        </Typography>
      </Paper>

    </div>
  );
}


export default withStyles(styles)(EnterPaper);

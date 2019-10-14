import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
    },
    input: {
      display: 'none',
    },
  }));

function MenuRow(props) {
    const classes = useStyles();

    return (
        <div>
            <Button variant="outlined" color="primary" className={classes.button}>{props.name1}</Button>
            <Button variant="outlined" color="secondary" className={classes.button}>{props.name2}</Button>
        </div>
    );
}

export default MenuRow;
import React from 'react';
import styles from './Login.module.scss';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
      display: 'flex',
    },
  },
}));

const Login = () => {
  const classes = useStyles();
  return (
    <div className={styles.component}>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField className={styles.input} required id="standard-required" label="Login" />
        <TextField
          required
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          className={styles.input}
        />
        <Button variant="contained" color="primary" component={NavLink} className={styles.link} exact to={`${process.env.PUBLIC_URL}/`} activeClassName='active'>Log in</Button>
      </form>   
    </div>
  );
};

export default Login;
import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './PageNav.module.scss';
import Button from '@material-ui/core/Button';

const PageNav = () => (
  <nav className={styles.component}>
    <Button component={NavLink} className={styles.link} exact to={`${process.env.PUBLIC_URL}/`} activeClassName='active'>Dashboard</Button>
    <Button component={NavLink} className={styles.link} to={`${process.env.PUBLIC_URL}/login`} activeClassName='active'>Login</Button>
  </nav>
);

export default PageNav;
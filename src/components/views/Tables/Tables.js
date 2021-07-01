import React from 'react';
import styles from './Tables.module.scss';
import { Link } from 'react-router-dom';


const Tables = () => (
  <div className={styles.component}>
    <h2>Tables</h2>
    <Link className={styles.link} to={`${process.env.PUBLIC_URL}/tables/booking/:id`} activeClassName='active'>Booking</Link>
    <Link className={styles.link} to={`${process.env.PUBLIC_URL}/tables/booking/new`} activeClassName='active'>New booking</Link>
    <Link className={styles.link} to={`${process.env.PUBLIC_URL}/tables/events/:id`} activeClassName='active'>Events</Link>
    <Link className={styles.link} to={`${process.env.PUBLIC_URL}/tables/events/new`} activeClassName='active'>New event</Link>
  </div>
);

export default Tables;
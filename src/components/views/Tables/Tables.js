import React from 'react';
import styles from './Tables.module.scss';
import { Link } from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const demoContent = [
  {id: '1', hour: '12:00', bookingId: '11', eventId: '111', details: 'Example details'},
  {id: '2', hour: '12:30', bookingId: '22', eventId: '222', details: 'Example details'},
  {id: '3', hour: '13:00', bookingId: '33', eventId: '333', details: 'Example details'},
  {id: '4', hour: '13:30', bookingId: '44', eventId: '444', details: 'Example details'},
  {id: '5', hour: '14:00', bookingId: '55', eventId: '555', details: 'Example details'},
  {id: '6', hour: '14:30', bookingId: '66', eventId: '666', details: 'Example details'},
  {id: '7', hour: '15:00', bookingId: '77', eventId: '777', details: 'Example details'},
  {id: '8', hour: '15:30', bookingId: '88', eventId: '888', details: 'Example details'},
  {id: '9', hour: '16:00', bookingId: '99', eventId: '999', details: 'Example details'},
  {id: '10', hour: '16:30', bookingId: '1010', eventId: '101010', details: 'Example details'},
  {id: '11', hour: '17:00', bookingId: '1111', eventId: '111111', details: 'Example details'},
  {id: '12', hour: '17:30', bookingId: '1212', eventId: '121212', details: 'Example details'},
  {id: '13', hour: '18:00', bookingId: '1313', eventId: '131313', details: 'Example details'},
  {id: '14', hour: '18:30', bookingId: '1414', eventId: '141414', details: 'Example details'},
  {id: '15', hour: '19:00', bookingId: '1515', eventId: '151515', details: 'Example details'},
];


const Tables = () => (
  <div className={styles.component}>
    <h2>Tables</h2>
    <Paper className={styles.component}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Hour</TableCell>
            <TableCell>Stolik 1 </TableCell>
            <TableCell>Stolik 2</TableCell>
            <TableCell>Stolik 3</TableCell>
            <TableCell>Stolik 4</TableCell>
            <TableCell>Stolik 5</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {demoContent.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.hour}
              </TableCell>
              <TableCell component="th" scope="row">
                <Button variant="contained" color="primary" component={Link} className={styles.link} to={`${process.env.PUBLIC_URL}/tables/booking/${row.bookingId}`} activeClassName='active'>{row.bookingId}</Button>
              </TableCell>
              <TableCell component="th" scope="row">
                <Button variant="contained" color="primary" component={Link} className={styles.link} to={`${process.env.PUBLIC_URL}/tables/events/${row.eventId}`} activeClassName='active'>{row.eventId}</Button>
              </TableCell>
              <TableCell component="th" scope="row">
                {row.details}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.details}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.details}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  </div>
);

export default Tables;
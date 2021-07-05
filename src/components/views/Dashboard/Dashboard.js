import React from 'react';
import styles from './Dashboard.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';


const demoContent = [
  {id: '1', date: '5/07/2021', status: 'to go', order: 123},
  {id: '2', date: '5/07/2021', status: 'on the spot', order: 88},
  {id: '3', date: '4/07/2021', status: 'to go', order: 44},
  {id: '4', date: '4/07/2021', status: 'on the spot', order: 333},
  {id: '5', date: '3/07/2021', status: 'to go', order: 222},
  {id: '6', date: '3/07/2021', status: 'on the spot', order: 46},
  {id: '7', date: '2/07/2021', status: 'to go', order: 56},
  {id: '8', date: '2/07/2021', status: 'on the spot', order: 87},
  {id: '9', date: '1/07/2021', status: 'to go', order: 26},
  {id: '10', date: '1/07/2021', status: 'on the spot', order: 57},
];

const demoBooking = [
  {id: '1', hour: '12:30', event: 'Wedding'},
  {id: '2', hour: '14:30', event: 'Birthday'},
  {id: '3', hour: '16:30'},
  {id: '4', hour: '17:30'},
  {id: '5', hour: '18:30'},
  {id: '6', hour: '19:30'},
  {id: '7', hour: '20:30'},
  {id: '8', hour: '21:30'},
  {id: '9', hour: '22:30'},
  {id: '10',  hour: '23:30'},
];



const Dashboard = () => (
  <div className={styles.component}>
    <div className={styles.dashNav}>
      <Button variant="contained" color="primary" component={NavLink} className={styles.link} to={`${process.env.PUBLIC_URL}/tables`} activeClassName='active'>Tables</Button>
      <Button variant="contained" color="primary" component={NavLink} className={styles.link} to={`${process.env.PUBLIC_URL}/kitchen`} activeClassName='active'>Kitchen</Button>
      <Button variant="contained" color="primary" component={NavLink} className={styles.link} to={`${process.env.PUBLIC_URL}/waiter`} activeClassName='active'>Waiter</Button>
    </div>
    <Paper className={styles.component}>
      <h3>STATISTICS</h3>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Lp.</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>On the spot/to go</TableCell>
            <TableCell>Orders</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {demoContent.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell>
                {row.date}
              </TableCell>
              <TableCell>
                {row.status}
              </TableCell>
              <TableCell>
                {row.order}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
    <Paper className={styles.component}>
      <h3>BOOKING AND EVENTS</h3>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Rezerwacje</TableCell>
            <TableCell>Eventy</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {demoBooking.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.hour}
              </TableCell>
              <TableCell>
                {row.event}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  </div>
);

export default Dashboard;